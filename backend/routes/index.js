const express = require('express');
const router = express.Router();
const volunteerRouter =require('./volunteerRoute')
const { UploadEventDetails, getAllEvents } = require('../Controller/EventController');

// Volunteer Route
router.use('/',volunteerRouter)

router.post('/', UploadEventDetails);
router.get('/', getAllEvents);
module.exports = router;
