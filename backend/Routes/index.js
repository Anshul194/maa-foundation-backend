const express=require('express')
const router = express.Router();
const VolunteerRoute=require('./volunteerRoute')
const EventRouter=require('./EventRoute')
const BlogRouter=require('./BlogRoute')

router.use('/',BlogRouter)
const feedbackRoute = require('./feedbackRoute');

router.use('/',VolunteerRoute);
router.use('/event',EventRouter)
router.use('/feedback',feedbackRoute);

module.exports=router;
