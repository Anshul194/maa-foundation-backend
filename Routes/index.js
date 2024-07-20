const express=require('express')
const router = express.Router();
const VolunteerRoute=require('./volunteerRoute')
const EventRouter=require('./EventRoute')
const BlogRouter=require('./BlogRoute')
const GalleryRouter = require('./GalleryRoute');
router.use('/',VolunteerRoute);
router.use('/event',EventRouter);
router.use('/gallery',GalleryRouter);
router.use('/blog',BlogRouter);
const feedbackRoute = require('./feedbackRoute');

router.use('/',VolunteerRoute);
router.use('/',EventRouter)
router.use('/feedback',feedbackRoute);
router.use('/',SubscribeRouter);

module.exports=router;
