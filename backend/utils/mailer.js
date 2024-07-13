const nodemailer = require('nodemailer');

const sendMail = async (to, subject, text) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "mailer1499@gmail.com",
          pass: "olxc gzke ytcf yhqu",
        },
      });

    let mailOptions = {
        from: 'mailer1499@gmail.com',
        to,
        subject,
        text
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email: ', error);
    }
};

const sendWelcomeEmail = async (volunteerEmail) => {
    const subject = 'Welcome to Our Volunteer Program!';
    const text = `
    Dear Volunteer,

    We are thrilled to welcome you to our volunteer program! Your willingness to contribute your time and skills to our cause is greatly appreciated.

    As a volunteer, you will have the opportunity to make a significant impact in our community. We will provide you with all the necessary resources and support to ensure a fulfilling and rewarding experience.

    Please don't hesitate to reach out if you have any questions or need assistance. We are here to help and guide you every step of the way.

    Thank you once again for joining us. We look forward to working with you and achieving great things together.

    Best regards,
    Maa Foundation

    `;

    await sendMail(volunteerEmail, subject, text);
};

const notifyAdmin = async (adminEmail, volunteerName,volunteerEmail) => {
    const subject = 'New Volunteer Added';
    const text = `
    Dear Admin,

    We are pleased to inform you that a new volunteer named ${volunteerName} has joined our program. 

    Here are some details about the new volunteer:
    - Name: ${volunteerName}
    - Joining Date: ${new Date().toLocaleDateString()}
    - Contact Email: ${volunteerEmail}

    We believe that ${volunteerName} will be a valuable addition to our team and will contribute significantly to our cause.

    Please make sure to reach out to the new volunteer and provide any necessary onboarding information.

    Thank you for your continued dedication and support.

    Best regards,
    Maa Foundation
    `;

    await sendMail(adminEmail, subject, text);
};

module.exports = {
    sendWelcomeEmail,
    notifyAdmin
};
