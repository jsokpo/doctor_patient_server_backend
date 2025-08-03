"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeSlotModel = void 0;
const prisma_1 = require("../../shared/prisma");
exports.TimeSlotModel = {
    ccreate: async (data) => {
        const date = new Date(data.startTime.getFullYear(), data.startTime.getMonth(), data.startTime.getDate());
        return await prisma_1.prisma.doctorTimeSlot.create({
            data: {
                doctorId: data.doctorId,
                date: date.toISOString(), // ✅ required field
                startTime: data.startTime.toISOString(),
                endTime: data.endTime.toISOString(),
                available: data.available ?? true,
            },
        });
    },
    findByDoctor: async (doctorId) => {
        return await prisma_1.prisma.doctorTimeSlot.findMany({
            where: { doctorId },
            orderBy: { startTime: 'asc' },
        });
    },
    findById: async (slotId) => {
        return await prisma_1.prisma.doctorTimeSlot.findUnique({
            where: { id: slotId },
        });
    },
    update: async (slotId, data) => {
        return await prisma_1.prisma.doctorTimeSlot.update({
            where: { id: slotId },
            data,
        });
    },
    delete: async (slotId) => {
        return await prisma_1.prisma.doctorTimeSlot.delete({
            where: { id: slotId },
        });
    },
};
