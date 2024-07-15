const express = require('express');
const BlogRouter = express.Router();

const {CreateBlog,AddBlogDetails,getAllBlogs} = require('../Controller/BlogController')

BlogRouter.post("/newBlog",CreateBlog)
BlogRouter.post("/addBlogDetails",AddBlogDetails)
BlogRouter.get("/getAllBlogs",getAllBlogs)

module.exports = BlogRouter;