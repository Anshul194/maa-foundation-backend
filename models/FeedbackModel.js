const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    email :{
        type: String,
        required: true
    },
    phone :{
        type : String,
        required: false
    },
    feedback :{
        type : String,
        required : true
    },
    
})


const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;