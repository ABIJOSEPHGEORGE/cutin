const mongoose = require('mongoose');

const Coupon = mongoose.model('Coupon', new mongoose.Schema({
    coupon_code: {
        type: String,
        required: true,
        unique: true
    },
    discount_percentage: {
        type: Number,
        required: true,
    },
    valid_from: {
        type: Date,
        required: true,
    },
    valid_to: {
        type: Date,
        required: true,
    },
    min_purchase: {
        type: Number,
        required: true,
    },
    max_discount: {
        type: Number,
        required: true,
    }
}));

module.exports = Coupon;