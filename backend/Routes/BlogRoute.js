const express = require('express');
const BlogRouter = express.Router();

const {CreateBlog,AddBlogDetails,} = require('../Controller/BlogController')

BlogRouter.post("/newBlog",CreateBlog)
BlogRouter.post("/addBlogDetails",AddBlogDetails)

module.exports = BlogRouter;