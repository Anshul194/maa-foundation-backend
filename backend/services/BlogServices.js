const Blogs = require("../Models/BlogModel");
const cloudinary = require("cloudinary").v2;

async function uploading(file, folder) {
    const options = {
        folder,
    };

    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

exports.CreateBlog = async (blogData) => {
    try {
        const { coverImg, authorImg, title, author, sampleData } = blogData;

        const coverImgUploaded = await uploading(coverImg, 'Foundation');
        const authorImgUploaded = await uploading(authorImg, 'Foundation');

        const newBlog = new Blogs({
            title,
            author,
            sampleData,
            coverImg: coverImgUploaded.secure_url,
            authorImg: authorImgUploaded.secure_url,
            cloudinary_name: coverImgUploaded.public_id,
        });

        await newBlog.save();

        return newBlog;

    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

exports.AddBlogDetails = async (blogDetails) => {
    try {
        const { blogId, dataTitle, dataDescription } = blogDetails;

        const blog = await Blogs.findById(blogId);

        if (!blog) {
            throw new Error("Blog not found");
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

        return updatedBlog;

    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

exports.getAllBlogs = async (page = 1, limit = 10) => {
    try {
        const skip = (page - 1) * limit;

        const blogs = await Blogs.find().skip(skip).limit(limit);
        const total = await Blogs.countDocuments();

        return {
            blogs,
            pagination: {
                total,
                page,
                pages: Math.ceil(total / limit),
                limit,
            },
        };
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

exports.deleteBlog = async (blogId) => {
    try {
        const blog = await Blogs.findById(blogId);

        if (!blog) {
            throw new Error("Blog not found");
        }

        await Blogs.findByIdAndDelete(blogId);

        return {
            success: true,
            message: "Blog deleted successfully",
        };

    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};