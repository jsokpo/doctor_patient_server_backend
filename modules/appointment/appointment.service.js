"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentService = void 0;
const client_1 = require("@prisma/client");
const appointment_model_1 = require("./appointment.model");
const customError_1 = require("../../errors/customError");
const constants_1 = require("../../constants");
exports.AppointmentService = {
    /**
     * Create a new appointment
     */
    createAppointment: async (doctorId, patientId, date, timeSlot) => {
        if (!doctorId || !patientId || !date || !timeSlot) {
            throw new customError_1.CustomError('All fields are required', constants_1.HTTP_STATUS.BAD_REQUEST);
        }
        return await appointment_model_1.AppointmentModel.create({
            doctorId,
            patientId,
            date,
            timeSlot,
        });
    },
    /**
     * Get all appointments optionally filtered by doctorId or patientId
     */
    getAppointments: async (filter) => {
        return await appointment_model_1.AppointmentModel.findAll(filter);
    },
    /**
     * Get a single appointment by ID
     */
    getAppointmentById: async (appointmentId) => {
        const appointment = await appointment_model_1.AppointmentModel.findById(appointmentId);
        if (!appointment) {
            throw new customError_1.CustomError('Appointment not found', constants_1.HTTP_STATUS.NOT_FOUND);
        }
        return appointment;
    },
    /**
     * Update appointment status
     */
    updateStatus: async (appointmentId, status) => {
        if (!Object.values(client_1.AppointmentStatus).includes(status)) {
            throw new customError_1.CustomError('Invalid appointment status', constants_1.HTTP_STATUS.BAD_REQUEST);
        }
        return await appointment_model_1.AppointmentModel.updateStatus(appointmentId, status);
    },
    /**
     * Delete an appointment
     */
    deleteAppointment: async (appointmentId) => {
        return await appointment_model_1.AppointmentModel.delete(appointmentId);
    },
};
