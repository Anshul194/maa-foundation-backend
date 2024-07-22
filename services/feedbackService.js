const Feedback = require('../models/FeedbackModel')
const { successFeedbackEMail, notifyAdminAboutFeedback } = require('../utils/mailer');

exports.createFeedback = async (feedbackData) => {
    try {
        const feedback = new Feedback(feedbackData);
        await feedback.save();
        // Send email to user after success feedback
        await successFeedbackEMail(feedback.email);

        // Notify admin about the new feedbacks
        const adminEmail = 'ananyaj138@gmail.com';
        await notifyAdminAboutFeedback(adminEmail, feedback.email);
        return feedback;

    } catch (error) {
        console.error('Error creating feedback: ', error);
        throw error;
    }
};
