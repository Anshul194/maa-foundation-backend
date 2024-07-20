const express = require('express');
const EventRouter = express.Router();

const { UploadEventDetails, getAllEvents, deleteEvent } = require('../controller/EventController');

/**
 * @swagger
 * /events:
 *   post:
 *     summary: Upload event details
 *     description: Upload details of an event including an image file.
 *     tags:
 *       - Events
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Title of the event
 *               subtitle:
 *                 type: string
 *                 description: Subtitle of the event
 *               imgFile:
 *                 type: string
 *                 format: binary
 *                 description: Image file to upload for the event
 *     responses:
 *       200:
 *         description: Event details uploaded successfully
 *       400:
 *         description: Bad request
 */
EventRouter.post('/events', UploadEventDetails);

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
EventRouter.get('/events', getAllEvents);

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

EventRouter.delete('/events/:id', deleteEvent);


module.exports = EventRouter;
