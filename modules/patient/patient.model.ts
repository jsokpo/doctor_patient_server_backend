import { prisma } from '../../shared/prisma';

export const PatientModel = {
  create: async (data: any) => {
    return await prisma.patient.create({ data });
  },

  getAll: async () => {
    return await prisma.patient.findMany();
  },

  getById: async (id: string) => {
    return await prisma.patient.findUnique({ where: { id } });
  },

  update: async (id: string, data: any) => {
    return await prisma.patient.update({
      where: { id },
      data,
    });
  },

  delete: async (id: string) => {
    return await prisma.patient.delete({ where: { id } });
  },
};
