import { prisma } from '../../shared/prisma';

export const MedicineModel = {
  create: async (data: any) => {
    return await prisma.medicine.create({ data });
  },

  getAll: async () => {
    return await prisma.medicine.findMany();
  },

  getById: async (id: string) => {
    return await prisma.medicine.findUnique({ where: { id } });
  },

  update: async (id: string, data: any) => {
    return await prisma.medicine.update({
      where: { id },
      data,
    });
  },

  delete: async (id: string) => {
    return await prisma.medicine.delete({ where: { id } });
  },
};
