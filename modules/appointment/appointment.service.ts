import { AppointmentStatus } from '@prisma/client';
import { AppointmentModel } from './appointment.model';
import { CustomError } from '../../errors/customError';
import { HTTP_STATUS } from '../../constants';

export const AppointmentService = {
  /**
   * Create a new appointment
   */
  createAppointment: async (doctorId: string, patientId: string, date: string, timeSlot: string) => {
    if (!doctorId || !patientId || !date || !timeSlot) {
      throw new CustomError('All fields are required', HTTP_STATUS.BAD_REQUEST);
    }

    return await AppointmentModel.create({
      doctorId,
      patientId,
      date,
      timeSlot,
    });
  },

  /**
   * Get all appointments optionally filtered by doctorId or patientId
   */
  getAppointments: async (filter: { doctorId?: string; patientId?: string }) => {
    return await AppointmentModel.findAll(filter);
  },

  /**
   * Get a single appointment by ID
   */
  getAppointmentById: async (appointmentId: string) => {
    const appointment = await AppointmentModel.findById(appointmentId);

    if (!appointment) {
      throw new CustomError('Appointment not found', HTTP_STATUS.NOT_FOUND);
    }

    return appointment;
  },

  /**
   * Update appointment status
   */
  updateStatus: async (appointmentId: string, status: AppointmentStatus) => {
    if (!Object.values(AppointmentStatus).includes(status)) {
      throw new CustomError('Invalid appointment status', HTTP_STATUS.BAD_REQUEST);
    }

    return await AppointmentModel.updateStatus(appointmentId, status);
  },

  /**
   * Delete an appointment
   */
  deleteAppointment: async (appointmentId: string) => {
    return await AppointmentModel.delete(appointmentId);
  },
};
