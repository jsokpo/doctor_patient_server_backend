import { PrismaClient, Role } from '@prisma/client';
import { CustomError } from '../../errors/customError';
import { HTTP_STATUS } from '../../constants';

const prisma = new PrismaClient();

export const AdminService = {
  /**
   * Get all users
   */
  getAllUsers: async () => {
    return await prisma.user.findMany();
  },

  /**
   * Approve a doctor by ID
   */
  approveDoctor: async (doctorId: string) => {
    const doctor = await prisma.user.findUnique({ where: { id: doctorId } });

    if (!doctor || doctor.role !== 'DOCTOR') {
      throw new CustomError('Doctor not found or invalid role', HTTP_STATUS.BAD_REQUEST);
    }

    return await prisma.user.update({
      where: { id: doctorId },
      data: { isApproved: true },
    });
  },

  /**
 * Change a user's role
 */
  changeUserRole: async (userId: string, newRole: string) => {
  const upperRole = newRole.toUpperCase();

  if (!['ADMIN', 'DOCTOR', 'PATIENT'].includes(upperRole)) {
    throw new CustomError('Invalid role provided', HTTP_STATUS.BAD_REQUEST);
  }

  return await prisma.user.update({
    where: { id: userId },
    data: { role: upperRole as Role }, // ✅ Cast to enum
    });
  },
};
