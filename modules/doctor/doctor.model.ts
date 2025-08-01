import { prisma } from '../../shared/prisma';

export const DoctorModel = {
  create: async (data: {
    name: string;
    specialization: string;
    email: string;
    password: string;
    phone?: string;
    bio?: string;
  }) => {
    return await prisma.doctor.create({ data });
  },

  findAll: async () => {
    return await prisma.doctor.findMany({
      orderBy: { name: 'asc' },
    });
  },

  findById: async (id: string) => {
    return await prisma.doctor.findUnique({
      where: { id },
    });
  },

  findByEmail: async (email: string) => {
    return await prisma.doctor.findUnique({
      where: { email },
    });
  },

  update: async (
    id: string,
    data: Partial<{ name: string; specialtization: string; email: string; password: string; phone: string; bio: string }>
  ) => {
    return await prisma.doctor.update({
      where: { id },
      data,
    });
  },

  delete: async (id: string) => {
    return await prisma.doctor.delete({
      where: { id },
    });
  },
};
