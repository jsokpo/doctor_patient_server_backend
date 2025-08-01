"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientModel = void 0;
const prisma_1 = require("../../shared/prisma");
exports.PatientModel = {
    create: async (data) => {
        return await prisma_1.prisma.patient.create({ data });
    },
    getAll: async () => {
        return await prisma_1.prisma.patient.findMany();
    },
    getById: async (id) => {
        return await prisma_1.prisma.patient.findUnique({ where: { id } });
    },
    update: async (id, data) => {
        return await prisma_1.prisma.patient.update({
            where: { id },
            data,
        });
    },
    delete: async (id) => {
        return await prisma_1.prisma.patient.delete({ where: { id } });
    },
};
