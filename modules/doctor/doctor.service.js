"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorService = void 0;
const prisma_1 = require("../../shared/prisma.js");
const customError_1 = require("../../errors/customError.js");
const constants_1 = require("../../constants/index.ts");
exports.DoctorService = {
    createDoctor: async (data) => {
        const existing = await prisma_1.prisma.doctor.findUnique({
            where: { email: data.email },
        });
        if (existing) {
            throw new customError_1.CustomError('Doctor with this email already exists', constants_1.HTTP_STATUS.CONFLICT);
        }
        return await prisma_1.prisma.doctor.create({ data });
    },
    getAllDoctors: async () => {
        return await prisma_1.prisma.doctor.findMany({
            orderBy: { name: 'asc' },
        });
    },
    getDoctorById: async (id) => {
        const doctor = await prisma_1.prisma.doctor.findUnique({ where: { id } });
        if (!doctor) {
            throw new customError_1.CustomError('Doctor not found', constants_1.HTTP_STATUS.NOT_FOUND);
        }
        return doctor;
    },
    updateDoctor: async (id, data) => {
        const doctor = await prisma_1.prisma.doctor.findUnique({ where: { id } });
        if (!doctor) {
            throw new customError_1.CustomError('Doctor not found', constants_1.HTTP_STATUS.NOT_FOUND);
        }
        return await prisma_1.prisma.doctor.update({
            where: { id },
            data,
        });
    },
    deleteDoctor: async (id) => {
        const doctor = await prisma_1.prisma.doctor.findUnique({ where: { id } });
        if (!doctor) {
            throw new customError_1.CustomError('Doctor not found', constants_1.HTTP_STATUS.NOT_FOUND);
        }
        return await prisma_1.prisma.doctor.delete({ where: { id } });
    },
};
