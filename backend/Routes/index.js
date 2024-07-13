const express=require('express')
const router=express.Router();
const VolunteerRoute=require('./volunteerRoute')
const EventRouter=require('./EventRoute')
router.use('/',VolunteerRoute);
router.use('/event',EventRouter)

module.exports=router;
