"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorModel = void 0;
const prisma_1 = require("../../shared/prisma.js");
exports.DoctorModel = {
    create: async (data) => {
        return await prisma_1.prisma.doctor.create({ data });
    },
    findAll: async () => {
        return await prisma_1.prisma.doctor.findMany({
            orderBy: { name: 'asc' },
        });
    },
    findById: async (id) => {
        return await prisma_1.prisma.doctor.findUnique({
            where: { id },
        });
    },
    findByEmail: async (email) => {
        return await prisma_1.prisma.doctor.findUnique({
            where: { email },
        });
    },
    update: async (id, data) => {
        return await prisma_1.prisma.doctor.update({
            where: { id },
            data,
        });
    },
    delete: async (id) => {
        return await prisma_1.prisma.doctor.delete({
            where: { id },
        });
    },
};
