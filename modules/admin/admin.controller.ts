import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { HTTP_STATUS } from '../../constants';
import { CustomError } from '../../errors/customError';
import { capitalize } from '../../helpers';

const prisma = new PrismaClient();

/**
 * Get all users in the system
 */
export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await prisma.user.findMany();
    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: 'All users retrieved successfully',
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Approve doctor registration
 */
export const approveDoctor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { doctorId } = req.params;

    const doctor = await prisma.user.update({
      where: { id: doctorId },
      data: { isApproved: true },
    });

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: `Doctor ${capitalize(doctor.name)} has been approved.`,
      data: doctor,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Change user role
 */
export const changeUserRole = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.params;
    const { newRole } = req.body;

    if (!['admin', 'doctor', 'patient'].includes(newRole)) {
      throw new CustomError('Invalid role', HTTP_STATUS.BAD_REQUEST);
    }

    const user = await prisma.user.update({
      where: { id: userId },
      data: { role: newRole },
    });

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: `User ${capitalize(user.name)} role changed to ${newRole}.`,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
