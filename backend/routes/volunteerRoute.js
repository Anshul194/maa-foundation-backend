const volunteer = require('../controller/volunteerController');
const express=require('express');

const volunteerRouter=express.Router();

volunteerRouter.post('/create/volunteer',volunteer.createVolunteer);

 module.exports=volunteerRouter;