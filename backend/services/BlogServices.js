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
        const Blog = (blogData)

        const coverImgUploaded = await uploading(Blog.coverImg, 'Foundation');
        const authorImgUploaded = await uploading(Blog.authorImg, 'Foundation');

        const newBlog = await new Blogs({
            title:Blog.title,
            author:Blog.author,
            sampleData:Blog.sampleData,
            coverImg: coverImgUploaded.secure_url,
            authorImg: authorImgUploaded.secure_url,
            cloudinary_name: uploadedImage.public_id,
        }).save();


        return newBlog;

    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

exports.AddBlogDetails = async (blogDetails) => {
    try {

        const blog = await Blogs.findById(blogDetails._id);

        const updatedBlog = await Blogs.findByIdAndUpdate(
            blogDetails._id,
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

        return updatedBlog

    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}