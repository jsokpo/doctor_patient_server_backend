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
                authorId: data.authorId,
                tags: data.tags || [],
            },
        });
    },
    findAll: async () => {
        return await prisma_1.prisma.blog.findMany({
            orderBy: { createdAt: 'desc' },
            include: { author: true },
        });
    },
    findById: async (id) => {
        return await prisma_1.prisma.blog.findUnique({
            where: { id },
            include: { author: true },
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
