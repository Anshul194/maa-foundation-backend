// routes/BlogRouter.js
const express = require('express');
const BlogRouter = express.Router();
const { CreateBlog, AddBlogDetails, getAllBlogs } = require('../Controller/BlogController');

/**
 * @swagger
 * /newBlog:
 *   post:
 *     summary: Create a new blog
 *     tags: [Blogs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "My First Blog"
 *               content:
 *                 type: string
 *                 example: "This is the content of my first blog"
 *     responses:
 *       201:
 *         description: Blog created successfully
 *       400:
 *         description: Bad request
 */
BlogRouter.post("/newBlog", CreateBlog);

/**
 * @swagger
 * /addBlogDetails:
 *   post:
 *     summary: Add details to an existing blog
 *     tags: [Blogs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               blogId:
 *                 type: string
 *                 example: "60d21b4667d0d8992e610c85"
 *               details:
 *                 type: string
 *                 example: "Additional details for the blog"
 *     responses:
 *       200:
 *         description: Blog details added successfully
 *       400:
 *         description: Bad request
 */
BlogRouter.post("/addBlogDetails", AddBlogDetails);

/**
 * @swagger
 * /getAllBlogs:
 *   get:
 *     summary: Retrieve all blogs
 *     tags: [Blogs]
 *     responses:
 *       200:
 *         description: A list of blogs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "60d21b4667d0d8992e610c85"
 *                   title:
 *                     type: string
 *                     example: "My First Blog"
 *                   content:
 *                     type: string
 *                     example: "This is the content of my first blog"
 *       500:
 *         description: Server error
 */
BlogRouter.get("/getAllBlogs", getAllBlogs);

module.exports = BlogRouter;
