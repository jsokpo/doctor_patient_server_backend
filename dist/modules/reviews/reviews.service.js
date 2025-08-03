"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewService = void 0;
const prisma_1 = require("../../shared/prisma");
const customError_1 = require("../../errors/customError");
const constants_1 = require("../../constants");
exports.ReviewService = {
    create: async (data) => {
        return await prisma_1.prisma.review.create({ data });
    },
    getAll: async () => {
        return await prisma_1.prisma.review.findMany({
            include: {
                doctor: true,
                patient: true,
            },
        });
    },
    getById: async (id) => {
        const review = await prisma_1.prisma.review.findUnique({
            where: { id },
            include: {
                doctor: true,
                patient: true,
            },
        });
        if (!review) {
            throw new customError_1.CustomError('Review not found', constants_1.HTTP_STATUS.NOT_FOUND);
        }
        return review;
    },
    update: async (id, data) => {
        const exists = await prisma_1.prisma.review.findUnique({ where: { id } });
        if (!exists) {
            throw new customError_1.CustomError('Review not found', constants_1.HTTP_STATUS.NOT_FOUND);
        }
        return await prisma_1.prisma.review.update({
            where: { id },
            data,
        });
    },
    remove: async (id) => {
        const exists = await prisma_1.prisma.review.findUnique({ where: { id } });
        if (!exists) {
            throw new customError_1.CustomError('Review not found', constants_1.HTTP_STATUS.NOT_FOUND);
        }
        return await prisma_1.prisma.review.delete({ where: { id } });
    },
};
