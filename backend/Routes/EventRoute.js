const express = require('express');
const EventRouter = express.Router();

const { UploadEventDetails, getAllEvents, deleteEvent } = require('../Controller/EventController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       required:
 *         - title
 *         - subtitle
 *       properties:
 *         title:
 *           type: string
 *           description: Title of the event
 *         subtitle:
 *           type: string
 *           description: Subtitle of the event
 *         imageUrl:
 *           type: string
 *           description: Image URL of the event
 *       example:
 *         title: "Event Title"
 *         subtitle: "Event Subtitle"
 *         imageUrl: "http://example.com/image.jpg"
 *         cloudinary_name: "event_image"
 */

/**
 * @swagger
 * /events:
 *   post:
 *     summary: Upload event details
 *     description: Upload details of an event.
 *     tags: [Events]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Event'
 *     responses:
 *       200:
 *         description: Event uploaded successfully
 *       400:
 *         description: Bad request
 */
EventRouter.post('/', UploadEventDetails);

/**
 * @swagger
 * /events:
 *   get:
 *     summary: Get all events
 *     description: Retrieve a list of all events.
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: Successfully retrieved all events
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Event'
 */
EventRouter.get('/', getAllEvents);

/**
 * @swagger
 * /events:
 *   delete:
 *     summary: Delete an event
 *     description: Delete an event by ID.
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: Event deleted successfully
 *       400:
 *         description: Bad request
 */
EventRouter.delete('/:id', deleteEvent);

module.exports = EventRouter;
