"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorTimeSlotService = void 0;
const prisma_1 = require("../../shared/prisma");
const customError_1 = require("../../errors/customError");
const constants_1 = require("../../constants");
exports.DoctorTimeSlotService = {
    createTimeSlot: async (data) => {
        return await prisma_1.prisma.doctorTimeSlot.create({
            data: {
                doctorId: data.doctorId,
                startTime: new Date(data.startTime),
                endTime: new Date(data.endTime),
                available: data.available ?? true,
            },
        });
    },
    getSlotsByDoctor: async (doctorId) => {
        return await prisma_1.prisma.doctorTimeSlot.findMany({
            where: { doctorId },
            orderBy: { startTime: 'asc' },
        });
    },
    updateSlot: async (slotId, data) => {
        const existingSlot = await prisma_1.prisma.doctorTimeSlot.findUnique({ where: { id: slotId } });
        if (!existingSlot) {
            throw new customError_1.CustomError('Time slot not found', constants_1.HTTP_STATUS.NOT_FOUND);
        }
        return await prisma_1.prisma.doctorTimeSlot.update({
            where: { id: slotId },
            data: {
                ...('startTime' in data && { startTime: new Date(data.startTime) }),
                ...('endTime' in data && { endTime: new Date(data.endTime) }),
                available: data.available,
            },
        });
    },
    deleteSlot: async (slotId) => {
        const existingSlot = await prisma_1.prisma.doctorTimeSlot.findUnique({ where: { id: slotId } });
        if (!existingSlot) {
            throw new customError_1.CustomError('Time slot not found', constants_1.HTTP_STATUS.NOT_FOUND);
        }
        return await prisma_1.prisma.doctorTimeSlot.delete({ where: { id: slotId } });
    },
};
