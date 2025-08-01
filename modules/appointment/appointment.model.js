"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentModel = void 0;
const prisma_1 = require("../../shared/prisma");
const client_1 = require("@prisma/client");
exports.AppointmentModel = {
    /**
     * Create a new appointment
     */
    create: async (data) => {
        return await prisma_1.prisma.appointment.create({
            data: {
                doctorId: data.doctorId,
                patientId: data.patientId,
                date: new Date(data.date),
                timeSlot: data.timeSlot,
                status: client_1.AppointmentStatus.PENDING,
            },
        });
    },
    /**
     * Get all appointments (optionally filter by doctorId or patientId)
     */
    findAll: async (filter) => {
        return await prisma_1.prisma.appointment.findMany({
            where: {
                ...(filter.doctorId && { doctorId: filter.doctorId }),
                ...(filter.patientId && { patientId: filter.patientId }),
            },
            include: {
                doctor: true,
                patient: true,
            },
            orderBy: {
                date: 'desc',
            },
        });
    },
    /**
     * Get a single appointment by ID
     */
    findById: async (appointmentId) => {
        return await prisma_1.prisma.appointment.findUnique({
            where: { id: appointmentId },
            include: {
                doctor: true,
                patient: true,
            },
        });
    },
    /**
     * Update the status of an appointment
     */
    updateStatus: async (appointmentId, status) => {
        return await prisma_1.prisma.appointment.update({
            where: { id: appointmentId },
            data: { status },
        });
    },
    /**
     * Delete an appointment
     */
    delete: async (appointmentId) => {
        return await prisma_1.prisma.appointment.delete({
            where: { id: appointmentId },
        });
    },
};
