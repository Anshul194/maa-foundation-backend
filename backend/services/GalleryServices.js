const Gallery = require('../Models/GalleryModel');
const cloudinary = require("cloudinary").v2;

async function uploading(file, folder) {
    const options = {
        folder,
    };

    // Upload the image and get metadata
    const result = await cloudinary.uploader.upload(file.tempFilePath, options);

    // Return necessary details including width and height
    return {
        secure_url: result.secure_url,
        public_id: result.public_id,
        width: result.width,
        height: result.height
    };
}

// Create a new event
exports.UploadGalleryDetails = async (GalleryDetailData) => {
    try {


        const NewGallery = (GalleryDetailData);

        const uploadedImage = await uploading(NewGallery.imgFile, 'Foundation');

        // Determine the orientation of the image
        const orientation = uploadedImage.width > uploadedImage.height ? 'landscape' : 'portrait';
        console.log(orientation)

        // Save the new record with orientation
        const newRecord = await new Gallery({
            title: NewGallery.title,
            subtitle: NewGallery.subtitle,
            imageUrl: uploadedImage.secure_url,
            cloudinary_name: uploadedImage.public_id,
            orientation: orientation  // Save the orientation in the record
        }).save();

        return newRecord;

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
