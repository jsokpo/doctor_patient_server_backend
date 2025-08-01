import { prisma } from '../../shared/prisma';
import { CustomError } from '../../errors/customError';
import { HTTP_STATUS } from '../../constants';

export const DoctorTimeSlotService = {
  create: async (data: {
  doctorId: string;
  startTime: Date;
  endTime: Date;
  available?: boolean;
}) => {
  const date = new Date(
    data.startTime.getFullYear(),
    data.startTime.getMonth(),
    data.startTime.getDate()
  );

  return await prisma.doctorTimeSlot.create({
    data: {
      doctorId: data.doctorId,
      date: date.toISOString(),           // ✅ required field
      startTime: data.startTime.toISOString(),
      endTime: data.endTime.toISOString(),
      available: data.available ?? true,
    },
  });
},


  getSlotsByDoctor: async (doctorId: string) => {
    return await prisma.doctorTimeSlot.findMany({
      where: { doctorId },
      orderBy: { startTime: 'asc' },
    });
  },

  updateSlot: async (
    slotId: string,
    data: Partial<{ startTime: string; endTime: string; available: boolean }>
  ) => {
    const existingSlot = await prisma.doctorTimeSlot.findUnique({ where: { id: slotId } });

    if (!existingSlot) {
      throw new CustomError('Time slot not found', HTTP_STATUS.NOT_FOUND);
    }

    return await prisma.doctorTimeSlot.update({
      where: { id: slotId },
      data: {
        ...('startTime' in data && { startTime: new Date(data.startTime!) }),
        ...('endTime' in data && { endTime: new Date(data.endTime!) }),
        available: data.available,
      },
    });
  },

  deleteSlot: async (slotId: string) => {
    const existingSlot = await prisma.doctorTimeSlot.findUnique({ where: { id: slotId } });

    if (!existingSlot) {
      throw new CustomError('Time slot not found', HTTP_STATUS.NOT_FOUND);
    }

    return await prisma.doctorTimeSlot.delete({ where: { id: slotId } });
  },
};
