"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeSlotModel = void 0;
const prisma_1 = require("../../shared/prisma");
exports.TimeSlotModel = {
    create: async (data) => {
        return await prisma_1.prisma.doctorTimeSlot.create({
            data: {
                doctorId: data.doctorId,
                startTime: data.startTime,
                endTime: data.endTime,
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
