const EventService = require('../services/EventServices')

// Create a new event
exports.UploadEventDetails = async (req, res) => {
    try {
        const imgFile = req.files.imgFile;
        const { title, subtitle,eventDate } = req.body;

        if ( !imgFile || !title || !subtitle || !eventDate) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required details",
            });
        }

        const newRecord = ({
            title,
            subtitle,
            imgFile,
            eventDate,
        });

        const EventDetailData = await EventService.UploadEventDetails(newRecord);

        return res.status(200).json({
            success: true,
            msg: "Event uploaded successfully",
            data: EventDetailData,
        });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'Error creating event' });
    }
};

// Get all events
exports.getAllEvents = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const events = await EventService.getAllEvents(page);
        res.status(200).json(events);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'Error fetching events' });
    }
};


// Delete Event
exports.deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                success: false,
                msg: "Event ID is required",
            });
        }

        const deletedEvent = await EventService.deleteEvent(id);

        if (!deletedEvent) {
            return res.status(404).json({
                success: false,
                msg: "Event not found",
            });
        }

        return res.status(200).json({
            success: true,
            msg: "Event deleted successfully",
            data: deletedEvent,
        });
    } catch (error) {
        console.error("Error deleting event:", error);
        return res.status(500).json({
            success: false,
            msg: "Server error",
            error: error.message,
        });
    }
};
