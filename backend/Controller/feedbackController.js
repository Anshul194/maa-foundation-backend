const Feedback = require("../models/FeedbackModel");
const { createFeedback } = require("../services/feedbackService");


exports.addFeedback = async(req,res) => {

    try {
        const {email, feedback} = req.body;
        if(!email || !feedback){
            res.status(200).json({ message: "Email and feedback required" });
        }

        const createdFeedback = await createFeedback(req.body);
        res.status(201).json(createdFeedback);


        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getAllFeedbacks = async(_,res)=>{
    try {
        const feedbacks = await Feedback.find({});
        if(!feedbacks){
            return res.status(200).json({message:"No feedbacks found in database", feedbacks}); 
            
        }
        return res.status(200).json({message:"All feedbacks fetched successfully", feedbacks}); 
        
        
        
    } catch (error) {
        res.status(500).json({ message: error.message || "Something went wrong while fetching feedbacks" });
        
    }
}
