const mongoose = require('mongoose');


const carSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true
    },
    price: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },

});

const CarModel = mongoose.model('Car', carSchema);
module.exports = CarModel;
