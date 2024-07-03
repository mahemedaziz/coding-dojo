require('dotenv').config(); // Charger les variables d'environnement en premier
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const User = require('./models/User');
const Car = require('./models/Car');
const Booking = require('./models/Booking');
const jwt = require('jsonwebtoken');
const app = express();
const port = 5000;
const salt = bcrypt.genSaltSync(10);



const jwtSecret = "fasefraw4r5r3wq45wdfgw34twdfg";

// Middleware
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173' // URL de votre front-end
}));

app.use(cookieParser());

// Connexion à MongoDB avec gestion des erreurs
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('🤖🤖🤖🤖 Connexion à la base de données établie ❎');
    })
    .catch((err) => {
        console.error('Échec de la connexion à MongoDB :', err);
    });

function getUserDataFromRequest(req) {
    return new Promise((resolve, reject) => {
        const token = req.cookies.jwt;
        if (!token) {
            return reject(new Error('No JWT token provided'));
        }

        jwt.verify(token, jwtSecret, {}, (err, userData) => {
            if (err) {
                return reject(err); // Gérer l'erreur ici
            }
            resolve(userData); // Résoudre les données utilisateur
        });
    });
}

// Route pour l'inscription
app.post('/register', async (req, res) => {
    const { fullName, email, password } = req.body;
    try {
        const userDocument = await User.create({
            fullName,
            email,
            password: bcrypt.hashSync(password, salt)
        });
        res.status(200).json(userDocument);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(422).json({ error: 'User already exists' });
        }
        res.status(422).json(error);
    }
});

// Route pour la connexion
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const userDocument = await User.findOne({ email });
        if (userDocument) {
            const passwordValid = bcrypt.compareSync(password, userDocument.password);
            if (passwordValid) {
                const tokenPayload = {
                    email: userDocument.email,
                    id: userDocument._id,
                    fullName: userDocument.fullName,
                };

                jwt.sign(tokenPayload, jwtSecret, {}, (err, token) => {
                    if (err) throw err;
                    res.cookie('jwt', token, { httpOnly: true, secure: true, sameSite: 'strict' }).json({
                        message: 'Login successful',
                        user: {
                            id: userDocument._id,
                            email: userDocument.email,
                            fullName: userDocument.fullName, // Retourner les informations utilisateur pour le front-end
                        }
                    });
                });
            } else {
                res.status(401).json({ error: 'Incorrect password' });
            }
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route pour récupérer le profil utilisateur
app.get('/profile', (req, res) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) return res.status(401).json({ error: 'Unauthorized' });
            const user = await User.findById(userData.id);
            if (!user) return res.status(404).json({ error: 'User not found' });
            res.json({ fullName: user.fullName, email: user.email, _id: user._id });
        });
    } else {
        res.status(401).json({ error: 'No token provided' });
    }
});
// Route pour la deconnexion
app.post('/logout', (req, res) => {
    res.cookie('jwt', '', { expires: new Date(0), httpOnly: true, secure: true, sameSite: 'strict' }).json(true);
});

app.get("/car", async (req, res) => {
    try {
        res.json(await Car.find({}));
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

app.post("/car", async (req, res) => {
    const userData = await getUserDataFromRequest(req);
    const { title, description, price, imageUrl } = req.body;
    Car.create({
        title,
        description,
        price,
        imageUrl,
        owner: userData.id,
    }).then((doc) => {
        res.json(doc);
    }).catch((err) => {
        throw err;
    });
});

app.put("/car/:carId", async (req, res) => {
    try {
        const userData = await getUserDataFromRequest(req);
        const car = await Car.findByIdAndUpdate({
            _id: req.params.carId,
            owner: userData.id,

        }, req.body, { new: true });
        if (!car) {
            return res.status(404).json({ message: "Car not found" });
        }
        res.json({ status: true, car: car });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

app.delete("/car/:carId", async (req, res) => {
    try {
        const userData = await getUserDataFromRequest(req);
        const car = await Car.findOneAndDelete({
            _id: req.params.carId,
            owner: userData.id,
        });
        if (!car) {
            return res.status(404).json({ message: "Car not found or unauthorized" });
        }
        res.json({ status: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
});



app.post("/bookings", async (req, res) => {
    try {
        const userData = await getUserDataFromRequest(req);
        const { checkin, checkout, price, car } = req.body;

        // Vérifier si les dates se chevauchent
        const existingBookings = await Booking.find({
            car: car,
            $or: [
                { checkin: { $lt: new Date(checkout), $gte: new Date(checkin) } },
                { checkout: { $gt: new Date(checkin), $lte: new Date(checkout) } },
                { checkin: { $lte: new Date(checkin) }, checkout: { $gte: new Date(checkout) } }
            ]
        });

        if (existingBookings.length > 0) {
            return res.status(409).json({
                message: "Dates already booked",
                bookings: existingBookings
            });
        }

        // Créer la réservation si les dates ne se chevauchent pas
        const newBooking = await Booking.create({
            checkin,
            checkout,
            price,
            car,
            owner: userData.id,
        });

        res.json(newBooking);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

app.get("/bookings/:carId", async (req, res) => {
    try {
        const carId = req.params.carId;
        const bookings = await Booking.find({ car: carId });
        res.json(bookings);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

app.delete("/bookings/:bookingId", async (req, res) => {
    try {
        const userData = await getUserDataFromRequest(req);
        const booking = await Booking.findOne({
            _id: req.params.bookingId,
            owner: userData.id,
        });
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }
        await Booking.deleteOne({ _id: req.params.bookingId, owner: userData.id });
        res.json({ status: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
});


app.get("/user-bookings", async (req, res) => {
    try {
        const userData = await getUserDataFromRequest(req);
        res.json(await Booking.find({ owner: userData.id }));
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
});


app.get("/user-cars", async (req, res) => {
    try {
        const userData = await getUserDataFromRequest(req);
        const cars = await Car.find({ owner: userData.id });
        res.json(cars);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
});


app.put("/bookings/:bookingId/pay", async (req, res) => {
    try {
        const userData = await getUserDataFromRequest(req);
        const booking = await Booking.findOne({
            _id: req.params.bookingId,
            owner: userData.id,
        });
        if (!booking) {
            return res.status(404).json({ message: "Booking not found or unauthorized" });
        }
        booking.paid = true;
        await booking.save();
        res.json({ status: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

app.listen(port, () =>
    console.log(`🤩🤩🤩🤩 Le serveur est en cours d'exécution sur le port ${port} ⚡ et prêt à recevoir vos requêtes et réponses`)
);
