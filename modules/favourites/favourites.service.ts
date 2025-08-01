import { prisma } from '../../shared/prisma';
import { CustomError } from '../../errors/customError';
import { HTTP_STATUS } from '../../constants';

export const FavouriteService = {
  addFavourite: async (patientId: string, doctorId: string) => {
    // Prevent duplicates
    const exists = await prisma.favourites.findFirst({
      where: {
        patientId,
        doctorId,
      },
    });

    if (exists) {
      throw new CustomError('Doctor is already in favourites', HTTP_STATUS.BAD_REQUEST);
    }

    return await prisma.favourites.create({
      data: {
        patientId,
        doctorId,
      },
    });
  },

  getFavourites: async (patientId: string) => {
    return await prisma.favourites.findMany({
      where: { patientId },
      include: {
        doctor: true, // Assumes relation exists to Doctor
      },
    });
  },

  removeFavourite: async (patientId: string, doctorId: string) => {
    const favourite = await prisma.favourites.findFirst({
      where: {
        patientId,
        doctorId,
      },
    });

    if (!favourite) {
      throw new CustomError('Favourite not found', HTTP_STATUS.NOT_FOUND);
    }

    return await prisma.favourites.delete({
      where: { id: favourite.id },
    });
  },
};
