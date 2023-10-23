const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        default: 'user',
        enums: ['user', 'merchant'],
    },
    status: {
        type: Boolean,
        default: true,
    }

},{timestamps: true}))

module.exports = User;