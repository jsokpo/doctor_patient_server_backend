"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavouriteModel = void 0;
const prisma_1 = require("../../shared/prisma");
exports.FavouriteModel = {
    create: async (patientId, doctorId) => {
        return await prisma_1.prisma.favourites.create({
            data: {
                patientId,
                doctorId,
            },
        });
    },
    findByPatient: async (patientId) => {
        return await prisma_1.prisma.favourites.findMany({
            where: { patientId },
            include: { doctor: true }, // Includes doctor details
        });
    },
    findOne: async (patientId, doctorId) => {
        return await prisma_1.prisma.favourites.findFirst({
            where: {
                patientId,
                doctorId,
            },
        });
    },
    delete: async (favouriteId) => {
        return await prisma_1.prisma.favourites.delete({
            where: { id: favouriteId },
        });
    },
};
