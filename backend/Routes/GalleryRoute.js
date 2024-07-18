const express = require('express');
const GalleryRouter = express.Router();

const { UploadGalleryDetails, getAllGallery, deleteGallery } = require('../Controller/GalleryController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Gallery:
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
 *         cloudinary_name:
 *           type: string
 *           description: Cloudinary name for the image
 *       example:
 *         title: "Event Title"
 *         subtitle: "Event Subtitle"
 *         imageUrl: "http://example.com/image.jpg"
 *         cloudinary_name: "event_image"
 */

/**
 * @swagger
 * /gallery:
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
GalleryRouter.post('/', UploadGalleryDetails);

/**
 * @swagger
 * /gallery:
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
GalleryRouter.get('/', getAllGallery);

/**
 * @swagger
 * /gallery:
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
GalleryRouter.delete('/', deleteGallery);

module.exports = GalleryRouter;
