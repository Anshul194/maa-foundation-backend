const mongoose = require('mongoose');

const Gallery = new mongoose.Schema({
    title :{
        type: String,
        required: true
    },
    subtitle :{
        type : String,
        required: true
    },
    imageUrl :{
        type : String,
    },
    cloudinary_name :{
        type : String,
    },
    orientation: {  // Add the orientation field
        type: String,
        enum: ['landscape', 'portrait'],
        required: true
    }
})

module.exports = mongoose.model('Gallery', Gallery);