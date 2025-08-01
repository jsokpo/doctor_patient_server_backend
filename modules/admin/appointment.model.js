"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentModel = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.AppointmentModel = {
    /**
     * Create a new appointment
     */
    create: async (data) => {
        return await prisma.appointment.create({
            data: {
                doctorId: data.doctorId,
                patientId: data.patientId,
                date: new Date(data.date),
                timeSlot: data.timeSlot,
            },
        });
    },
    /**
     * Find all appointments (optionally filter by doctor or patient)
     */
    findAll: async (filter) => {
        return await prisma.appointment.findMany({
            where: {
                ...(filter?.doctorId && { doctorId: filter.doctorId }),
                ...(filter?.patientId && { patientId: filter.patientId }),
            },
            orderBy: {
                date: 'desc',
            },
            include: {
                doctor: true,
                patient: true,
            },
        });
    },
    /**
     * Update appointment status
     */
    updateStatus: async (appointmentId, status) => {
        return await prisma.appointment.update({
            where: { id: appointmentId },
            data: { status },
        });
    },
    /**
     * Delete an appointment
     */
    delete: async (appointmentId) => {
        return await prisma.appointment.delete({
            where: { id: appointmentId },
        });
    },
    /**
     * Get a single appointment by ID
     */
    findById: async (appointmentId) => {
        return await prisma.appointment.findUnique({
            where: { id: appointmentId },
            include: {
                doctor: true,
                patient: true,
            },
        });
    },
};
