import { prisma } from '../../shared/prisma';
import { CustomError } from '../../errors/customError';
import { HTTP_STATUS } from '../../constants';

export const ReviewService = {
  create: async (data: any) => {
    return await prisma.review.create({ data });
  },

  getAll: async () => {
    return await prisma.review.findMany({
      include: {
        doctor: true,
        patient: true,
      },
    });
  },

  getById: async (id: string) => {
    const review = await prisma.review.findUnique({
      where: { id },
      include: {
        doctor: true,
        patient: true,
      },
    });

    if (!review) {
      throw new CustomError('Review not found', HTTP_STATUS.NOT_FOUND);
    }

    return review;
  },

  update: async (id: string, data: any) => {
    const exists = await prisma.review.findUnique({ where: { id } });

    if (!exists) {
      throw new CustomError('Review not found', HTTP_STATUS.NOT_FOUND);
    }

    return await prisma.review.update({
      where: { id },
      data,
    });
  },

  remove: async (id: string) => {
    const exists = await prisma.review.findUnique({ where: { id } });

    if (!exists) {
      throw new CustomError('Review not found', HTTP_STATUS.NOT_FOUND);
    }

    return await prisma.review.delete({ where: { id } });
  },
};
