const mongoose = require('mongoose');
const moment = require('moment');

const blogDataSchema = new mongoose.Schema({
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
    date: {
        type: String,
        // default: moment().format('MMMM DD, YYYY')
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