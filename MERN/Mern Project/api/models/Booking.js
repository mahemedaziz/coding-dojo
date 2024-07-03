const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    checkin: {
        type: Date,
        required: true
    },
    checkout: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    car: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car',
        required: true
    },
    paid: {
        type: Boolean,
        default: false // Par défaut, les réservations ne sont pas payées
    }
});
const BookingModel = mongoose.model('Booking', bookingSchema);
module.exports = BookingModel;
