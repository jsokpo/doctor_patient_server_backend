"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlog = exports.updateBlog = exports.getBlogById = exports.getAllBlogs = exports.createBlog = void 0;
const blog_service_1 = require("./blog.service");
const catchAsync_1 = require("../../shared/catchAsync");
const sendResponse_1 = require("../../shared/sendResponse");
exports.createBlog = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const blogData = req.body;
    const result = await blog_service_1.BlogService.createBlog(blogData);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 201,
        success: true,
        message: 'Blog post created successfully',
        data: result,
    });
});
exports.getAllBlogs = (0, catchAsync_1.catchAsync)(async (_req, res) => {
    const result = await blog_service_1.BlogService.getAllBlogs();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: 'Blogs retrieved successfully',
        data: result,
    });
});
exports.getBlogById = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const result = await blog_service_1.BlogService.getBlogById(id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: 'Blog retrieved successfully',
        data: result,
    });
});
exports.updateBlog = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const blogData = req.body;
    const result = await blog_service_1.BlogService.updateBlog(id, blogData);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: 'Blog updated successfully',
        data: result,
    });
});
exports.deleteBlog = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const result = await blog_service_1.BlogService.deleteBlog(id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: 'Blog deleted successfully',
        data: result,
    });
});
