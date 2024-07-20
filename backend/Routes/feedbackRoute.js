const express = require("express");
const {
  addFeedback,
  getAllFeedbacks,
} = require("../Controller/FeedbackController");
const feedbackRoute = express.Router();

/**
 * @swagger
 * /feedback/create:
 *   post:
 *     summary: Add Feedback
 *     tags:
 *       - Feedbacks
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The email of the user
 *                 example: john.doe@example.com
 *               phone:
 *                 type: string
 *                 description: The phone number of the user
 *                 example: 123-456-7890
 *               feedback:
 *                 type: string
 *                 description: Feedback given by user
 *                 example: Good to have your services
 *     responses:
 *       201:
 *         description: Feedback added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The user ID
 *                   example: d5fE_asz12ry
 *                 email:
 *                   type: string
 *                   description: The email of the user
 *                   example: john.doe@example.com
 *                 phone:
 *                   type: string
 *                   description: The phone number of the user
 *                   example: 123-456-7890
 *                 feedback:
 *                   type: string
 *                   description: Feedback given by user
 *                   example: Good to have your services
 *       400:
 *         description: Bad request
 */
feedbackRoute.post("/create", addFeedback);

/**
 * @swagger
 * /feedback/getAll:
 *   get:
 *     summary: Get All Feedbacks
 *     tags:
 *       - Feedbacks
 *     responses:
 *       201:
 *         description: All feedback fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The user ID
 *                     example: d5fE_asz12ry
 *                   email:
 *                     type: string
 *                     description: The email of the user
 *                     example: john.doe@example.com
 *                   phone:
 *                     type: string
 *                     description: The phone number of the user
 *                     example: 123-456-7890
 *                   feedback:
 *                     type: string
 *                     description: Feedback given by user
 *                     example: Good to have your services
 *       400:
 *         description: Bad request
 */
feedbackRoute.get("/getAll", getAllFeedbacks);

module.exports = feedbackRoute;
