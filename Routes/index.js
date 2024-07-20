const express=require('express')
const router = express.Router();
const VolunteerRoute=require('./volunteerRoute')
const EventRouter=require('./EventRoute')
const BlogRouter=require('./BlogRoute')
const GalleryRouter = require('./GalleryRoute');

const feedbackRoute = require('./feedbackRoute');
router.use('/gallery',GalleryRouter);
router.use('/blog',BlogRouter);
router.use('/',VolunteerRoute);
router.use('/',EventRouter)
router.use('/feedback',feedbackRoute);
router.use('/',SubscribeRouter);

module.exports=router;
