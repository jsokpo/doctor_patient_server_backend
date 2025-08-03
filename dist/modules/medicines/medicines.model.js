"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicineModel = void 0;
const prisma_1 = require("../../shared/prisma");
exports.MedicineModel = {
    create: async (data) => {
        return await prisma_1.prisma.medicine.create({ data });
    },
    getAll: async () => {
        return await prisma_1.prisma.medicine.findMany();
    },
    getById: async (id) => {
        return await prisma_1.prisma.medicine.findUnique({ where: { id } });
    },
    update: async (id, data) => {
        return await prisma_1.prisma.medicine.update({
            where: { id },
            data,
        });
    },
    delete: async (id) => {
        return await prisma_1.prisma.medicine.delete({ where: { id } });
    },
};
