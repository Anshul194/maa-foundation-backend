const cloudinary = require("cloudinary").v2;

const cloudinaryConfig = () => {
    try {
        cloudinary.config({
            cloud_name: 'dgadm82x8',
            api_key: '179225192485121',
            api_secret: 'SQpMFCvPNy1AEzhJxYwhjaUwJMU'
        });
        console.log("Connected with Cloudinary");
    } catch (error) {
        console.error("Error in connection with Cloudinary:", error);
    }
};

module.exports = cloudinaryConfig;
