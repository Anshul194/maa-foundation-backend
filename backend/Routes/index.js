const express=require('express')
const router = express.Router();
const VolunteerRoute=require('./volunteerRoute')
const EventRouter=require('./EventRoute')
const PayRouter=require('./payRoute');
router.use('/',VolunteerRoute);
router.use('/event',EventRouter)
router.use('/payment',PayRouter);
const BlogRouter=require('./BlogRoute')
const SubscribeRouter=require('../Routes/SubscriptionRoute')

router.use('/',BlogRouter)
const feedbackRoute = require('./feedbackRoute');

router.use('/',VolunteerRoute);
router.use('/',EventRouter)
router.use('/feedback',feedbackRoute);
router.use('/',SubscribeRouter);

module.exports=router;
