const express=require('express')
const router = express.Router();
const VolunteerRoute=require('./volunteerRoute')
const EventRouter=require('./EventRoute')
<<<<<<< HEAD
const PayRouter=require('./payRoute');
router.use('/',VolunteerRoute);
router.use('/event',EventRouter)
router.use('/payment',PayRouter);
=======
const BlogRouter=require('./BlogRoute')
const SubscribeRouter=require('../Routes/SubscriptionRoute')

router.use('/',BlogRouter)
const feedbackRoute = require('./feedbackRoute');

router.use('/',VolunteerRoute);
router.use('/',EventRouter)
router.use('/feedback',feedbackRoute);
router.use('/',SubscribeRouter);

>>>>>>> 4168692e3ac8fb80e578ece8384033aa602bfd46
module.exports=router;
