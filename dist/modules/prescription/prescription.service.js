"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrescriptionService = void 0;
const prisma_1 = require("../../shared/prisma");
const customError_1 = require("../../errors/customError");
const constants_1 = require("../../constants");
exports.PrescriptionService = {
    create: async (data) => {
        return await prisma_1.prisma.prescription.create({ data });
    },
    getAll: async () => {
        return await prisma_1.prisma.prescription.findMany({
            include: {
                patient: true,
                doctor: true,
            },
        });
    },
    getById: async (id) => {
        const prescription = await prisma_1.prisma.prescription.findUnique({
            where: { id },
            include: {
                patient: true,
                doctor: true,
            },
        });
        if (!prescription) {
            throw new customError_1.CustomError('Prescription not found', constants_1.HTTP_STATUS.NOT_FOUND);
        }
        return prescription;
    },
    update: async (id, data) => {
        const exists = await prisma_1.prisma.prescription.findUnique({ where: { id } });
        if (!exists) {
            throw new customError_1.CustomError('Prescription not found', constants_1.HTTP_STATUS.NOT_FOUND);
        }
        return await prisma_1.prisma.prescription.update({
            where: { id },
            data,
        });
    },
    remove: async (id) => {
        const exists = await prisma_1.prisma.prescription.findUnique({ where: { id } });
        if (!exists) {
            throw new customError_1.CustomError('Prescription not found', constants_1.HTTP_STATUS.NOT_FOUND);
        }
        return await prisma_1.prisma.prescription.delete({ where: { id } });
    },
};
