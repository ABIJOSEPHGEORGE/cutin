const mongoose = require('mongoose');

const Commission = mongoose.model('Commision', new mongoose.Schema({
    commision_percentage: {
        type: Number,
        required: true,
    }
}));

module.exports = Commission;