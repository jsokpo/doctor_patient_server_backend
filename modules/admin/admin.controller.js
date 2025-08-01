"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeUserRole = exports.approveDoctor = exports.getAllUsers = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../../constants");
const customError_1 = require("../../errors/customError");
const helpers_1 = require("../../helpers");
const prisma = new client_1.PrismaClient();
/**
 * Get all users in the system
 */
const getAllUsers = async (req, res, next) => {
    try {
        const users = await prisma.user.findMany();
        res.status(constants_1.HTTP_STATUS.OK).json({
            success: true,
            message: 'All users retrieved successfully',
            data: users,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getAllUsers = getAllUsers;
/**
 * Approve doctor registration
 */
const approveDoctor = async (req, res, next) => {
    try {
        const { doctorId } = req.params;
        const doctor = await prisma.user.update({
            where: { id: doctorId },
            data: { isApproved: true },
        });
        res.status(constants_1.HTTP_STATUS.OK).json({
            success: true,
            message: `Doctor ${(0, helpers_1.capitalize)(doctor.name)} has been approved.`,
            data: doctor,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.approveDoctor = approveDoctor;
/**
 * Change user role
 */
const changeUserRole = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const { newRole } = req.body;
        if (!['admin', 'doctor', 'patient'].includes(newRole)) {
            throw new customError_1.CustomError('Invalid role', constants_1.HTTP_STATUS.BAD_REQUEST);
        }
        const user = await prisma.user.update({
            where: { id: userId },
            data: { role: newRole },
        });
        res.status(constants_1.HTTP_STATUS.OK).json({
            success: true,
            message: `User ${(0, helpers_1.capitalize)(user.name)} role changed to ${newRole}.`,
            data: user,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.changeUserRole = changeUserRole;
