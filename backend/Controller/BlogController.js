const blogService = require("../services/BlogServices");

exports.CreateBlog = async (req, res) => {
    try {
        const blogData = {
            coverImg: req.files.coverImg,
            authorImg: req.files.authorImg,
            title: req.body.title,
            author: req.body.author,
            sampleData: req.body.sampleData,
        };

        const newBlog = await blogService.CreateBlog(blogData);

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
};

exports.AddBlogDetails = async (req, res) => {
    try {
        const blogDetails = {
            blogId: req.body.blogId,
            dataTitle: req.body.dataTitle,
            dataDescription: req.body.dataDescription,
        };

        const updatedBlog = await blogService.AddBlogDetails(blogDetails);

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
};

exports.getAllBlogs = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const { blogs, pagination } = await blogService.getAllBlogs(page, limit);

        res.status(200).json({
            success: true,
            message: "All blogs retrieved successfully",
            data: blogs,
            pagination,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message,
        });
    }
};

exports.deleteBlog = async (req, res) => {
    try {
        const blogId = req.params.blogId;

        const result = await blogService.deleteBlog(blogId);

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message,
        });
    }
};