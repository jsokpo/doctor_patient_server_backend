import { prisma } from '../../shared/prisma';
import { CustomError } from '../../errors/customError';
import { HTTP_STATUS } from '../../constants';

export const PrescriptionService = {
  create: async (data: any) => {
    return await prisma.prescription.create({ data });
  },

  getAll: async () => {
    return await prisma.prescription.findMany({
      include: {
        patient: true,
        doctor: true,
      },
    });
  },

  getById: async (id: string) => {
    const prescription = await prisma.prescription.findUnique({
      where: { id },
      include: {
        patient: true,
        doctor: true,
      },
    });

    if (!prescription) {
      throw new CustomError('Prescription not found', HTTP_STATUS.NOT_FOUND);
    }

    return prescription;
  },

  update: async (id: string, data: any) => {
    const exists = await prisma.prescription.findUnique({ where: { id } });

    if (!exists) {
      throw new CustomError('Prescription not found', HTTP_STATUS.NOT_FOUND);
    }

    return await prisma.prescription.update({
      where: { id },
      data,
    });
  },

  remove: async (id: string) => {
    const exists = await prisma.prescription.findUnique({ where: { id } });

    if (!exists) {
      throw new CustomError('Prescription not found', HTTP_STATUS.NOT_FOUND);
    }

    return await prisma.prescription.delete({ where: { id } });
  },
};
