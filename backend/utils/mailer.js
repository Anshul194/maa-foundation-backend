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

const successFeedbackEMail = async (email) => {
    const subject = 'Thank You for Your Feedback!';
    const text = `
    Dear User,

    Thank you for taking the time to provide us with your valuable feedback. We have successfully received your input and greatly appreciate your effort in sharing your thoughts with us.

    Your feedback is incredibly important to us as we strive to improve our services. We are grateful for your insights and suggestions, and we will carefully consider them as we continue to enhance our services.

    Should you have any further comments, questions, or concerns, please do not hesitate to reach out to us. Your continued support means a lot to us, and we look forward to serving you better in the future.

    Thank you once again for your valuable feedback!

    Best regards,
    Maa Foundation

    `;

    await sendMail(email, subject, text);
};


module.exports = {
    sendWelcomeEmail,
    notifyAdmin,
    successFeedbackEMail
};
