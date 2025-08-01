import { prisma } from '../../shared/prisma';
import { CustomError } from '../../errors/customError';
import { HTTP_STATUS } from '../../constants';

export const PatientService = {
  create: async (data: any) => {
    return await prisma.patient.create({ data });
  },

  getAll: async () => {
    return await prisma.patient.findMany();
  },

  getById: async (id: string) => {
    const patient = await prisma.patient.findUnique({ where: { id } });

    if (!patient) {
      throw new CustomError('Patient not found', HTTP_STATUS.NOT_FOUND);
    }

    return patient;
  },

  update: async (id: string, data: any) => {
    const exists = await prisma.patient.findUnique({ where: { id } });

    if (!exists) {
      throw new CustomError('Patient not found', HTTP_STATUS.NOT_FOUND);
    }

    return await prisma.patient.update({
      where: { id },
      data,
    });
  },

  remove: async (id: string) => {
    const exists = await prisma.patient.findUnique({ where: { id } });

    if (!exists) {
      throw new CustomError('Patient not found', HTTP_STATUS.NOT_FOUND);
    }

    return await prisma.patient.delete({ where: { id } });
  },
};
