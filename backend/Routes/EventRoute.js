const express = require('express');
const router = express.Router();

const { UploadEventDetails, getAllEvents, deleteEvent} = require('../Controller/EventController');

router.post('/', UploadEventDetails);
router.get('/', getAllEvents);
router.delete('/', deleteEvent);

module.exports = router;
