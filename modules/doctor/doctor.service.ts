import { prisma } from '../../shared/prisma';
import { CustomError } from '../../errors/customError';
import { HTTP_STATUS } from '../../constants';

export const DoctorService = {
  createDoctor: async (data: {
    name: string;
    specialization: string;
    email: string;
    password: string;
    phone?: string;
    bio?: string;
  }) => {
    const existing = await prisma.doctor.findUnique({
      where: { email: data.email },
    });

    if (existing) {
      throw new CustomError('Doctor with this email already exists', HTTP_STATUS.CONFLICT);
    }

    return await prisma.doctor.create({ data });
  },

  getAllDoctors: async () => {
    return await prisma.doctor.findMany({
      orderBy: { name: 'asc' },
    });
  },

  getDoctorById: async (id: string) => {
    const doctor = await prisma.doctor.findUnique({ where: { id } });

    if (!doctor) {
      throw new CustomError('Doctor not found', HTTP_STATUS.NOT_FOUND);
    }

    return doctor;
  },

  updateDoctor: async (
    id: string,
    data: Partial<{ name: string; specialtization: string; email: string; password: string; phone: string; bio: string }>
  ) => {
    const doctor = await prisma.doctor.findUnique({ where: { id } });

    if (!doctor) {
      throw new CustomError('Doctor not found', HTTP_STATUS.NOT_FOUND);
    }

    return await prisma.doctor.update({
      where: { id },
      data,
    });
  },

  deleteDoctor: async (id: string) => {
    const doctor = await prisma.doctor.findUnique({ where: { id } });

    if (!doctor) {
      throw new CustomError('Doctor not found', HTTP_STATUS.NOT_FOUND);
    }

    return await prisma.doctor.delete({ where: { id } });
  },
};
