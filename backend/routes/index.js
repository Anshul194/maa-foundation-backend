const express = require('express');
const router = express.Router();

const { UploadEventDetails, getAllEvents } = require('../Controller/EventController');

router.post('/', UploadEventDetails);
router.get('/', getAllEvents);
module.exports = router;
