const volunteerService=require('../services/volunteerService')


exports.createVolunteer=async(req,res)=>{
    try{
const volunteer =await volunteerService.CreateVolunteers(req.body);
res.status(201).json(volunteer);
}
    catch(error){
        res.status(500).json({ message: error.message });
    }
}

