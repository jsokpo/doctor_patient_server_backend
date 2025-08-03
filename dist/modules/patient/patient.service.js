"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientService = void 0;
const prisma_1 = require("../../shared/prisma");
const customError_1 = require("../../errors/customError");
const constants_1 = require("../../constants");
exports.PatientService = {
    create: async (data) => {
        return await prisma_1.prisma.patient.create({ data });
    },
    getAll: async () => {
        return await prisma_1.prisma.patient.findMany();
    },
    getById: async (id) => {
        const patient = await prisma_1.prisma.patient.findUnique({ where: { id } });
        if (!patient) {
            throw new customError_1.CustomError('Patient not found', constants_1.HTTP_STATUS.NOT_FOUND);
        }
        return patient;
    },
    update: async (id, data) => {
        const exists = await prisma_1.prisma.patient.findUnique({ where: { id } });
        if (!exists) {
            throw new customError_1.CustomError('Patient not found', constants_1.HTTP_STATUS.NOT_FOUND);
        }
        return await prisma_1.prisma.patient.update({
            where: { id },
            data,
        });
    },
    remove: async (id) => {
        const exists = await prisma_1.prisma.patient.findUnique({ where: { id } });
        if (!exists) {
            throw new customError_1.CustomError('Patient not found', constants_1.HTTP_STATUS.NOT_FOUND);
        }
        return await prisma_1.prisma.patient.delete({ where: { id } });
    },
};
