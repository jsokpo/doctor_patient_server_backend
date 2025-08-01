"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrescriptionModel = void 0;
const prisma_1 = require("../../shared/prisma");
exports.PrescriptionModel = {
    create: async (data) => {
        return await prisma_1.prisma.prescription.create({ data });
    },
    findAll: async () => {
        return await prisma_1.prisma.prescription.findMany({
            include: {
                patient: true,
                doctor: true,
            },
        });
    },
    findById: async (id) => {
        return await prisma_1.prisma.prescription.findUnique({
            where: { id },
            include: {
                patient: true,
                doctor: true,
            },
        });
    },
    update: async (id, data) => {
        return await prisma_1.prisma.prescription.update({
            where: { id },
            data,
        });
    },
    delete: async (id) => {
        return await prisma_1.prisma.prescription.delete({
            where: { id },
        });
    },
};
