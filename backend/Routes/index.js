const express=require('express')
const router = express.Router();
const VolunteerRoute=require('./volunteerRoute')
const EventRouter=require('./EventRoute')
const BlogRouter=require('./BlogRoute')
const GalleryRouter = require('./GalleryRoute');
const SubscribeRouter=require('./SubscriptionRoute')
const feedbackRoute = require('./feedbackRoute');
const paymentRoute = require('./payRoute')
router.use('/gallery',GalleryRouter);
router.use('/blog',BlogRouter);
router.use('/',VolunteerRoute);
router.use('/',EventRouter)
router.use('/feedback',feedbackRoute);
router.use('/',SubscribeRouter);
router.use('/',paymentRoute);


module.exports=router;
