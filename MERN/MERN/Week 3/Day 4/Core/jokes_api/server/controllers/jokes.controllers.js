const Joke = require('../models/joke.model');

module.exports = {
    // Get all 
    getAllJokes: (req, res) => {
        Joke.find()
            .then((jokes) => {
                res.json(jokes)
            })
            .catch((err) => {
                res.status(500).json(err)
            });
    },

    // Get One
    getJokeById: (req, res) => {
        Joke.findById(req.params.id)
            .then((joke) => {
                res.json(joke);
            })
            .catch((err) => {
                res.status(500).json(err)
            });
    },

    // Create 
    createJoke: (req, res) => {
        const { joke, punchline } = req.body;
        const newJoke = new Joke({ joke, punchline });

        newJoke.save()
            .then((savedJoke) => {
                res.status(201).json(savedJoke)
            })
            .catch((err) => {
                res.status(400).json(err)
            });
    },

    // Update
    updateJoke: (req, res) => {
        const { joke, punchline } = req.body;

        Joke.findByIdAndUpdate(req.params.id, { joke, punchline }, { new: true })
            .then(updatedJoke => {
                res.json(updatedJoke);
            })
            .catch((err) => {
                res.status(400).json(err)
            });
    },

    // Delete a joke by ID
    deleteJoke: (req, res) => {
        Joke.findByIdAndDelete(req.params.id)
            .then((deletedJoke) => {
                res.status(204).send(deletedJoke);
            })
            .catch((err) => {
                res.status(400).json(err)
            });
    }
};
