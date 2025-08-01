import { prisma } from '../../shared/prisma';

export const TimeSlotModel = {
  ccreate: async (data: {
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

  findByDoctor: async (doctorId: string) => {
    return await prisma.doctorTimeSlot.findMany({
      where: { doctorId },
      orderBy: { startTime: 'asc' },
    });
  },

  findById: async (slotId: string) => {
    return await prisma.doctorTimeSlot.findUnique({
      where: { id: slotId },
    });
  },

  update: async (
    slotId: string,
    data: Partial<{ startTime: Date; endTime: Date; available: boolean }>
  ) => {
    return await prisma.doctorTimeSlot.update({
      where: { id: slotId },
      data,
    });
  },

  delete: async (slotId: string) => {
    return await prisma.doctorTimeSlot.delete({
      where: { id: slotId },
    });
  },
};
