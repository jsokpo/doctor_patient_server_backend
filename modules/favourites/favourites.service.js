"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavouriteService = void 0;
const prisma_1 = require("../../shared/prisma");
const customError_1 = require("../../errors/customError");
const constants_1 = require("../../constants");
exports.FavouriteService = {
    addFavourite: async (patientId, doctorId) => {
        // Prevent duplicates
        const exists = await prisma_1.prisma.favourite.findFirst({
            where: {
                patientId,
                doctorId,
            },
        });
        if (exists) {
            throw new customError_1.CustomError('Doctor is already in favourites', constants_1.HTTP_STATUS.BAD_REQUEST);
        }
        return await prisma_1.prisma.favourite.create({
            data: {
                patientId,
                doctorId,
            },
        });
    },
    getFavourites: async (patientId) => {
        return await prisma_1.prisma.favourite.findMany({
            where: { patientId },
            include: {
                doctor: true, // Assumes relation exists to Doctor
            },
        });
    },
    removeFavourite: async (patientId, doctorId) => {
        const favourite = await prisma_1.prisma.favourite.findFirst({
            where: {
                patientId,
                doctorId,
            },
        });
        if (!favourite) {
            throw new customError_1.CustomError('Favourite not found', constants_1.HTTP_STATUS.NOT_FOUND);
        }
        return await prisma_1.prisma.favourite.delete({
            where: { id: favourite.id },
        });
    },
};
