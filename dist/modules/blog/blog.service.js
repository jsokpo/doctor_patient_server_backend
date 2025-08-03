"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
const prisma_1 = require("../../shared/prisma");
const customError_1 = require("../../errors/customError");
const constants_1 = require("../../constants");
exports.BlogService = {
    createBlog: async (data) => {
        return await prisma_1.prisma.blog.create({
            data: {
                title: data.title,
                content: data.content,
                authorId: data.authorId,
                authorName: data.authorName, // ✅ Required field
                tags: data.tags || [],
            },
        });
    },
    getAllBlogs: async () => {
        return await prisma_1.prisma.blog.findMany({
            orderBy: { createdAt: 'desc' },
            include: { User: true },
        });
    },
    getBlogById: async (id) => {
        const blog = await prisma_1.prisma.blog.findUnique({
            where: { id },
            include: { User: true },
        });
        if (!blog) {
            throw new customError_1.CustomError('Blog not found', constants_1.HTTP_STATUS.NOT_FOUND);
        }
        return blog;
    },
    updateBlog: async (id, data) => {
        const blog = await prisma_1.prisma.blog.findUnique({ where: { id } });
        if (!blog) {
            throw new customError_1.CustomError('Blog not found', constants_1.HTTP_STATUS.NOT_FOUND);
        }
        return await prisma_1.prisma.blog.update({
            where: { id },
            data,
        });
    },
    deleteBlog: async (id) => {
        const blog = await prisma_1.prisma.blog.findUnique({ where: { id } });
        if (!blog) {
            throw new customError_1.CustomError('Blog not found', constants_1.HTTP_STATUS.NOT_FOUND);
        }
        return await prisma_1.prisma.blog.delete({ where: { id } });
    },
};
