const express = require('express');
const EventRouter = express.Router();

const { UploadEventDetails, getAllEvents, deleteEvent} = require('../Controller/EventController');

EventRouter.post('/', UploadEventDetails);
EventRouter.get('/', getAllEvents);
EventRouter.delete('/', deleteEvent);

module.exports = EventRouter;
