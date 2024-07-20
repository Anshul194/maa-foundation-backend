const express=require('express')
const router=express.Router();
const VolunteerRoute=require('./volunteerRoute')
const EventRouter=require('./EventRoute')
const PayRouter=require('./payRoute');
router.use('/',VolunteerRoute);
router.use('/event',EventRouter)
router.use('/payment',PayRouter);
module.exports=router;
