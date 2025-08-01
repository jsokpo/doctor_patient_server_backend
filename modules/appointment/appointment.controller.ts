import { Request, Response, NextFunction } from 'express';
import { AppointmentStatus } from '@prisma/client';
import { AppointmentModel } from './appointment.model';
import { HTTP_STATUS } from '../../constants';
import { CustomError } from '../../errors/customError';

/**
 * Create a new appointment
 */
export const createAppointment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { doctorId, patientId, date, timeSlot } = req.body;

    if (!doctorId || !patientId || !date || !timeSlot) {
      throw new CustomError('Missing required fields', HTTP_STATUS.BAD_REQUEST);
    }

    const appointment = await AppointmentModel.create({
      doctorId,
      patientId,
      date,
      timeSlot,
    });

    res.status(HTTP_STATUS.CREATED).json({
      success: true,
      message: 'Appointment created successfully',
      data: appointment,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all appointments (admin) or by doctor/patient
 */
export const getAppointments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const filter: { doctorId?: string; patientId?: string } = {};

    if (req.query.doctorId) filter.doctorId = req.query.doctorId as string;
    if (req.query.patientId) filter.patientId = req.query.patientId as string;

    const appointments = await AppointmentModel.findAll(filter);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: 'Appointments retrieved successfully',
      data: appointments,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get single appointment by ID
 */
export const getAppointmentById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { appointmentId } = req.params;
    const appointment = await AppointmentModel.findById(appointmentId);

    if (!appointment) {
      throw new CustomError('Appointment not found', HTTP_STATUS.NOT_FOUND);
    }

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: appointment,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update appointment status
 */
export const updateAppointmentStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { appointmentId } = req.params;
    const { status } = req.body;

    if (!Object.values(AppointmentStatus).includes(status)) {
      throw new CustomError('Invalid status value', HTTP_STATUS.BAD_REQUEST);
    }

    const updated = await AppointmentModel.updateStatus(appointmentId, status);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: 'Appointment status updated',
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete appointment
 */
export const deleteAppointment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { appointmentId } = req.params;
    await AppointmentModel.delete(appointmentId);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: 'Appointment deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
