import { prisma } from '../../shared/prisma';

export const PrescriptionModel = {
  create: async (data: any) => {
    return await prisma.prescription.create({ data });
  },

  findAll: async () => {
    return await prisma.prescription.findMany({
      include: {
        patient: true,
        doctor: true,
      },
    });
  },

  findById: async (id: string) => {
    return await prisma.prescription.findUnique({
      where: { id },
      include: {
        patient: true,
        doctor: true,
      },
    });
  },

  update: async (id: string, data: any) => {
    return await prisma.prescription.update({
      where: { id },
      data,
    });
  },

  delete: async (id: string) => {
    return await prisma.prescription.delete({
      where: { id },
    });
  },
};
