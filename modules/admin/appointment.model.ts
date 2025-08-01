import { PrismaClient, AppointmentStatus } from '@prisma/client';

const prisma = new PrismaClient();

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
        date: new Date(data.date), // Date string (e.g. ISO 8601) is converted
        timeSlot: data.timeSlot,
        status: AppointmentStatus.PENDING, // optional default
      },
    });
  },

  /**
   * Find all appointments (optionally filter by doctor or patient)
   */
  findAll: async (filter?: { doctorId?: string; patientId?: string }) => {
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
};
