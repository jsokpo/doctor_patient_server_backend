"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogModel = void 0;
const prisma_1 = require("../../shared/prisma");
exports.BlogModel = {
    create: async (data) => {
        return await prisma_1.prisma.blog.create({
            data: {
                title: data.title,
                content: data.content,
                tags: data.tags || [],
                authorName: data.authorName, // ✅ Required field
                authorId: data.authorId, // ✅ Prisma will link via scalar
            },
        });
    },
    findAll: async () => {
        return await prisma_1.prisma.blog.findMany({
            orderBy: { createdAt: 'desc' },
            include: { User: true },
        });
    },
    findById: async (id) => {
        return await prisma_1.prisma.blog.findUnique({
            where: { id },
            include: { User: true },
        });
    },
    update: async (id, data) => {
        return await prisma_1.prisma.blog.update({
            where: { id },
            data,
        });
    },
    delete: async (id) => {
        return await prisma_1.prisma.blog.delete({
            where: { id },
        });
    },
};
