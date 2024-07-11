const Volunteer =require('../models/VolunteerModel')
const { sendWelcomeEmail, notifyAdmin } = require('../utils/mailer');

exports.CreateVolunteers = async (volunteerData) => {
    try {
        const volunteer = new Volunteer(volunteerData);
        await volunteer.save();

        // Send welcome email to the volunteer
        await sendWelcomeEmail(volunteer.email);

        // Notify admin about the new volunteer
        const adminEmail = 'ananyaj138@gmail.com';
        await notifyAdmin(adminEmail, volunteer.name,volunteer.email);

        return volunteer;
    } catch (error) {
        console.error('Error creating volunteer: ', error);
        throw error;
    }
};
