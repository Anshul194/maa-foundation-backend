const mongoose = require('mongoose');

const blogDataSchema = new Schema({
    dataTitle:{
        type:String,
        required:true
    },
    dataDescription:{
        type:String,
        required:true
    }
})

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author: {
        type: String,
        required:true
    },
    coverImg:{
        type:String,    // Cloudinary Url
        required:true
    },
    authorImg: {
        type: String,    // Clodinary Url
        required:true
    },
    date:{
        type:String,
        required:true
    },
    sampleData:{
        type:String,
        required : true
    },
    data: {
        type: [blogDataSchema]
    }
})


const Blogs = mongoose.model('Blogs', blogSchema);

module.exports = Blogs;