import { prisma } from '../../shared/prisma';
import { AppointmentStatus } from '@prisma/client';

export const AppointmentModel = {
  /**
   * Create a new appointment
   */
  create: async (data: {
    doctorId: string;
    patientId: string;
    date: string;
    timeSlot: string;
  }) => {
    return await prisma.appointment.create({
      data: {
        doctorId: data.doctorId,
        patientId: data.patientId,
        date: new Date(data.date),
        timeSlot: data.timeSlot,
        status: AppointmentStatus.PENDING,
      },
    });
  },

  /**
   * Get all appointments (optionally filter by doctorId or patientId)
   */
  findAll: async (filter: { doctorId?: string; patientId?: string }) => {
    return await prisma.appointment.findMany({
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
  findById: async (appointmentId: string) => {
    return await prisma.appointment.findUnique({
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
  updateStatus: async (appointmentId: string, status: AppointmentStatus) => {
    return await prisma.appointment.update({
      where: { id: appointmentId },
      data: { status },
    });
  },

  /**
   * Delete an appointment
   */
  delete: async (appointmentId: string) => {
    return await prisma.appointment.delete({
      where: { id: appointmentId },
    });
  },
};
