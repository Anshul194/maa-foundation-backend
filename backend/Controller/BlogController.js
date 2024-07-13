const Blogs = require("../Models/BlogModel");
const cloudinary = require("cloudinary").v2;

async function uploading(file, folder) {
    const options = {
        folder,
    };

    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

exports.CreateBlog = async (req, res) => {
    try {
        const coverImg = req.files.coverImg;
        const authorImg = req.files.authorImg;
        const { title, author, sampleData } = req.body;

        if (!coverImg || !authorImg || !title || !author || !sampleData) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required details",
            });
        }

        const coverImgUploaded = await uploading(coverImg, 'Foundation');
        const authorImgUploaded = await uploading(authorImg, 'Foundation');

        const newBlog = new Blogs({
            title,
            author,
            sampleData,
            coverImg: coverImgUploaded.secure_url,
            authorImg: authorImgUploaded.secure_url,
        });

        await newBlog.save();

        res.status(201).json({
            success: true,
            message: "Blog created successfully",
            data: newBlog,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message,
        });
    }
}

exports.AddBlogDetails = async (req, res) => {
    try {
        const { blogId, dataTitle, dataDescription } = req.body;

        if (!blogId || !dataTitle || !dataDescription) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required details",
            });
        }

        const blog = await Blogs.findById(blogId);

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found",
            });
        }

        const updatedBlog = await Blogs.findByIdAndUpdate(
            blogId,
            {
                $push: {
                    data: {
                        dataTitle,
                        dataDescription
                    }
                }
            },
            {
                new: true,
                runValidators: true
            }
        );

        res.status(200).json({
            success: true,
            message: "Blog details added successfully",
            data: updatedBlog,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message,
        });
    }
}