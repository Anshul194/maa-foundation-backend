const express = require('express');
const SubscribeRouter = express.Router();
const { subscribeToUpdates } = require('../controller/SubscriptionController');

// Swagger documentation
/**
 * @swagger
 * /subscribe:
 *   post:
 *     summary: Subscribe to updates via email
 *     tags: [Subscription]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *     responses:
 *       200:
 *         description: Subscription successful
 *       400:
 *         description: Invalid email address
 */
SubscribeRouter.post("/subscribe", subscribeToUpdates);

module.exports = SubscribeRouter;
