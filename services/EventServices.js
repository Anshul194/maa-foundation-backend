const Events = require('../Models/EventModel');
const cloudinary = require("cloudinary").v2;

const  {getAllSubscribedEmails} = require('./SubscriptionService');
const { sendNewEventNotification } = require('../utils/mailer');

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

        const subscribedEmails = await getAllSubscribedEmails();
        console.log(subscribedEmails);

        await sendNewEventNotification(newRecord.title, newRecord.date, subscribedEmails);

        return NewEvent;

    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

// Get all events
exports.getAllEvents = async (pageNumber) => {
    try {
        const page = pageNumber;
        const limit =  10;
        const skip = (page - 1) * limit;

        const events = await Events.find().skip(skip).limit(limit);
        const total = await Events.countDocuments();

        return({
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
            data: events
        });

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
