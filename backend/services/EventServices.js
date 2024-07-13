const Events = require('../Models/EventModel');
const cloudinary = require("cloudinary").v2;

async function uploading(file, folder) {
    const options = {
        folder,
    };

    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

// Create a new event
exports.UploadEventDetails = async (EventDetailData) => {
    try {


        const NewEvent = (EventDetailData);

        const uploadedImage = await uploading(NewEvent.imgFile, 'Foundation');

        const newRecord = await new Events({
            title:NewEvent.title,
            subtitle:NewEvent.subtitle,
            imageUrl: uploadedImage.secure_url,
            cloudinary_name: uploadedImage.public_id,
        }).save();

        return NewEvent;

    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

// Get all events
exports.getAllEvents = async () => {
    try {
        const events = await Events.find();

        return events;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};


// Delete Event
exports.deleteEvent = async (DeleteEvent) => {
    try {

        const title = DeleteEvent;
        const findAndDestroy = await Events.findOne({ title });
        const del = await cloudinary.uploader.destroy(
            findAndDestroy.cloudinary_name
        );
        if (!del) {
            return ({
                success: false,
                msg: "not deleted from cloud",
            });
        }
        const deleteTt = await Events.deleteOne({ title });
        return (deleteTt);
    } catch (error) {
            console.error("Error: Fill all the fields", error);
            throw error
    }
};
