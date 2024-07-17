const mongoose = require('mongoose');


const volunteerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: false
    },
    dob: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    agreed: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;