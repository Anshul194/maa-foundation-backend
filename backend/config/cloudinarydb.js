const cloudinary = require("cloudinary").v2;

const cloudinaryConfig = () => {
    try {
        cloudinary.config({
            cloud_name: '',
            api_key: '',
            api_secret: ''
        });
        console.log("Connected with Cloudinary");
    } catch (error) {
        console.error("Error in connection with Cloudinary:", error);
    }
};

module.exports = cloudinaryConfig;
