const Gallery = require('../Models/GalleryModel');
const cloudinary = require("cloudinary").v2;

async function uploading(file, folder) {
    const options = {
        folder,
    };

    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

// Create a new event
exports.UploadGalleryDetails = async (GalleryDetailData) => {
    try {


        const NewGallery = (GalleryDetailData);

        const uploadedImage = await uploading(NewGallery.imgFile, 'Foundation');

        const newRecord = await new Gallery({
            title:NewGallery.title,
            subtitle:NewGallery.subtitle,
            imageUrl: uploadedImage.secure_url,
            cloudinary_name: uploadedImage.public_id,
        }).save();

        return NewGallery;

    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

// Get all events
exports.getAllGallery = async (pageNumber) => {
    try {
        const page = pageNumber;
        const limit =  10;
        const skip = (page - 1) * limit;

        const gallery = await Gallery.find().skip(skip).limit(limit);
        const total = await Gallery.countDocuments();

        return({
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
            data: gallery
        });

    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};


// Delete Event
exports.deleteGallery = async (DeleteGallery) => {
    try {

        const title = DeleteGallery;
        const findAndDestroy = await Gallery.findOne({ title });
        const del = await cloudinary.uploader.destroy(
            findAndDestroy.cloudinary_name
        );
        if (!del) {
            return ({
                success: false,
                msg: "not deleted from cloud",
            });
        }
        const deleteTt = await Gallery.deleteOne({ title });
        return (deleteTt);
    } catch (error) {
        console.error("Error: Fill all the fields", error);
        throw error
    }
};
