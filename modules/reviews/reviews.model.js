"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewModel = void 0;
const prisma_1 = require("../../shared/prisma");
exports.ReviewModel = {
    create: async (data) => {
        return await prisma_1.prisma.review.create({ data });
    },
    findAll: async () => {
        return await prisma_1.prisma.review.findMany({
            include: {
                doctor: true,
                patient: true,
            },
        });
    },
    findById: async (id) => {
        return await prisma_1.prisma.review.findUnique({
            where: { id },
            include: {
                doctor: true,
                patient: true,
            },
        });
    },
    update: async (id, data) => {
        return await prisma_1.prisma.review.update({
            where: { id },
            data,
        });
    },
    delete: async (id) => {
        return await prisma_1.prisma.review.delete({
            where: { id },
        });
    },
};
