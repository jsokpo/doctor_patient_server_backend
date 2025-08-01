import { prisma } from '../../shared/prisma';

export const ReviewModel = {
  create: async (data: any) => {
    return await prisma.review.create({ data });
  },

  findAll: async () => {
    return await prisma.review.findMany({
      include: {
        doctor: true,
        patient: true,
      },
    });
  },

  findById: async (id: string) => {
    return await prisma.review.findUnique({
      where: { id },
      include: {
        doctor: true,
        patient: true,
      },
    });
  },

  update: async (id: string, data: any) => {
    return await prisma.review.update({
      where: { id },
      data,
    });
  },

  delete: async (id: string) => {
    return await prisma.review.delete({
      where: { id },
    });
  },
};
