const express=require('express')
const router=express.Router();
const VolunteerRoute=require('./volunteerRoute')
const EventRouter=require('./EventRoute')
const BlogRouter=require('./BlogRoute')
router.use('/',VolunteerRoute);
router.use('/event',EventRouter)
router.use('/blog',BlogRouter)
module.exports=router;
