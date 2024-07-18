const GalleryService = require('../services/GalleryServices')

// Create a new event
exports.UploadGalleryDetails = async (req, res) => {
    try {
        const imgFile = req.files.imgFile;
        const { title, subtitle } = req.body;

        if ( !imgFile || !title || !subtitle) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required details",
            });
        }

        const newRecord = ({
            title,
            subtitle,
            imgFile,
        });

        const GalleryDetailData = await GalleryService.UploadGalleryDetails(newRecord);

        return res.status(200).json({
            success: true,
            msg: "Event uploaded successfully",
            data: GalleryDetailData,
        });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'Error creating event' });
    }
};

// Get all events
exports.getAllGallery = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const events = await GalleryService.getAllGallery(page);
        res.status(200).json(events);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'Error fetching events' });
    }
};


// Delete Event
exports.deleteGallery = async (req, res) => {
    try {
        const { title } = req.query;
        if (!title) {
            return res.status(400).json({
                success: false,
                msg: "Fill all the fields",
            });
        }
        const DeleteEvent = await GalleryService.deleteGallery(title)
        return res.status(200).json({
            success: true,
            msg: "Deleted successfully",
            data: DeleteEvent,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: "Fill all the fields",
            error: error,
        });
    }
};
