"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicinesService = void 0;
const prisma_1 = require("../../shared/prisma");
const customError_1 = require("../../errors/customError");
const constants_1 = require("../../constants");
exports.MedicinesService = {
    create: async (data) => {
        return await prisma_1.prisma.medicine.create({ data });
    },
    getAll: async () => {
        return await prisma_1.prisma.medicine.findMany();
    },
    getById: async (id) => {
        const medicine = await prisma_1.prisma.medicine.findUnique({ where: { id } });
        if (!medicine) {
            throw new customError_1.CustomError('Medicine not found', constants_1.HTTP_STATUS.NOT_FOUND);
        }
        return medicine;
    },
    update: async (id, data) => {
        const exists = await prisma_1.prisma.medicine.findUnique({ where: { id } });
        if (!exists) {
            throw new customError_1.CustomError('Medicine not found', constants_1.HTTP_STATUS.NOT_FOUND);
        }
        return await prisma_1.prisma.medicine.update({
            where: { id },
            data,
        });
    },
    remove: async (id) => {
        const exists = await prisma_1.prisma.medicine.findUnique({ where: { id } });
        if (!exists) {
            throw new customError_1.CustomError('Medicine not found', constants_1.HTTP_STATUS.NOT_FOUND);
        }
        return await prisma_1.prisma.medicine.delete({ where: { id } });
    },
};
