const Feedback = require('../Models/FeedbackModel')
const { successFeedbackEMail } = require('../utils/mailer');

exports.createFeedback = async (feedbackData) => {
    try {
        const feedback = new Feedback(feedbackData);
        await feedback.save();
        // Send email to user after success feedback
        await successFeedbackEMail(feedback.email);
        return feedback;

    } catch (error) {
        console.error('Error creating feedback: ', error);
        throw error;
    }
};
