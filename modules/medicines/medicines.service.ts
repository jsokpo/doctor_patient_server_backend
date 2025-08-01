import { prisma } from '../../shared/prisma';
import { CustomError } from '../../errors/customError';
import { HTTP_STATUS } from '../../constants';

export const MedicinesService = {
  create: async (data: any) => {
    return await prisma.medicine.create({ data });
  },

  getAll: async () => {
    return await prisma.medicine.findMany();
  },

  getById: async (id: string) => {
    const medicine = await prisma.medicine.findUnique({ where: { id } });

    if (!medicine) {
      throw new CustomError('Medicine not found', HTTP_STATUS.NOT_FOUND);
    }

    return medicine;
  },

  update: async (id: string, data: any) => {
    const exists = await prisma.medicine.findUnique({ where: { id } });

    if (!exists) {
      throw new CustomError('Medicine not found', HTTP_STATUS.NOT_FOUND);
    }

    return await prisma.medicine.update({
      where: { id },
      data,
    });
  },

  remove: async (id: string) => {
    const exists = await prisma.medicine.findUnique({ where: { id } });

    if (!exists) {
      throw new CustomError('Medicine not found', HTTP_STATUS.NOT_FOUND);
    }

    return await prisma.medicine.delete({ where: { id } });
  },
};
