"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAppointment = exports.updateAppointmentStatus = exports.getAppointmentById = exports.getAppointments = exports.createAppointment = void 0;
const client_1 = require("@prisma/client");
const appointment_model_1 = require("./appointment.model");
const constants_1 = require("../../constants");
const customError_1 = require("../../errors/customError");
/**
 * Create a new appointment
 */
const createAppointment = async (req, res, next) => {
    try {
        const { doctorId, patientId, date, timeSlot } = req.body;
        if (!doctorId || !patientId || !date || !timeSlot) {
            throw new customError_1.CustomError('Missing required fields', constants_1.HTTP_STATUS.BAD_REQUEST);
        }
        const appointment = await appointment_model_1.AppointmentModel.create({
            doctorId,
            patientId,
            date,
            timeSlot,
        });
        res.status(constants_1.HTTP_STATUS.CREATED).json({
            success: true,
            message: 'Appointment created successfully',
            data: appointment,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.createAppointment = createAppointment;
/**
 * Get all appointments (admin) or by doctor/patient
 */
const getAppointments = async (req, res, next) => {
    try {
        const filter = {};
        if (req.query.doctorId)
            filter.doctorId = req.query.doctorId;
        if (req.query.patientId)
            filter.patientId = req.query.patientId;
        const appointments = await appointment_model_1.AppointmentModel.findAll(filter);
        res.status(constants_1.HTTP_STATUS.OK).json({
            success: true,
            message: 'Appointments retrieved successfully',
            data: appointments,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getAppointments = getAppointments;
/**
 * Get single appointment by ID
 */
const getAppointmentById = async (req, res, next) => {
    try {
        const { appointmentId } = req.params;
        const appointment = await appointment_model_1.AppointmentModel.findById(appointmentId);
        if (!appointment) {
            throw new customError_1.CustomError('Appointment not found', constants_1.HTTP_STATUS.NOT_FOUND);
        }
        res.status(constants_1.HTTP_STATUS.OK).json({
            success: true,
            data: appointment,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getAppointmentById = getAppointmentById;
/**
 * Update appointment status
 */
const updateAppointmentStatus = async (req, res, next) => {
    try {
        const { appointmentId } = req.params;
        const { status } = req.body;
        if (!Object.values(client_1.AppointmentStatus).includes(status)) {
            throw new customError_1.CustomError('Invalid status value', constants_1.HTTP_STATUS.BAD_REQUEST);
        }
        const updated = await appointment_model_1.AppointmentModel.updateStatus(appointmentId, status);
        res.status(constants_1.HTTP_STATUS.OK).json({
            success: true,
            message: 'Appointment status updated',
            data: updated,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.updateAppointmentStatus = updateAppointmentStatus;
/**
 * Delete appointment
 */
const deleteAppointment = async (req, res, next) => {
    try {
        const { appointmentId } = req.params;
        await appointment_model_1.AppointmentModel.delete(appointmentId);
        res.status(constants_1.HTTP_STATUS.OK).json({
            success: true,
            message: 'Appointment deleted successfully',
        });
    }
    catch (error) {
        next(error);
    }
};
exports.deleteAppointment = deleteAppointment;
