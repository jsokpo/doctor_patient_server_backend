import { prisma } from '../../shared/prisma';

export const FavouriteModel = {
  create: async (patientId: string, doctorId: string) => {
    return await prisma.favourites.create({
      data: {
        patientId,
        doctorId,
      },
    });
  },

  findByPatient: async (patientId: string) => {
    return await prisma.favourites.findMany({
      where: { patientId },
      include: { doctor: true }, // Includes doctor details
    });
  },

  findOne: async (patientId: string, doctorId: string) => {
    return await prisma.favourites.findFirst({
      where: {
        patientId,
        doctorId,
      },
    });
  },

  delete: async (favouriteId: string) => {
    return await prisma.favourites.delete({
      where: { id: favouriteId },
    });
  },
};
