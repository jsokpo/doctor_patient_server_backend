"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const client_1 = require("@prisma/client");
const customError_1 = require("../../errors/customError");
const constants_1 = require("../../constants");
const prisma = new client_1.PrismaClient();
exports.AdminService = {
    /**
     * Get all users
     */
    getAllUsers: async () => {
        return await prisma.user.findMany();
    },
    /**
     * Approve a doctor by ID
     */
    approveDoctor: async (doctorId) => {
        const doctor = await prisma.user.findUnique({ where: { id: doctorId } });
        if (!doctor || doctor.role !== 'DOCTOR') {
            throw new customError_1.CustomError('Doctor not found or invalid role', constants_1.HTTP_STATUS.BAD_REQUEST);
        }
        return await prisma.user.update({
            where: { id: doctorId },
            data: { isApproved: true },
        });
    },
    /**
     * Change a user's role
     */
    changeUserRole: async (userId, newRole) => {
        if (!['ADMIN', 'DOCTOR', 'PATIENT'].includes(newRole.toUpperCase())) {
            throw new customError_1.CustomError('Invalid role provided', constants_1.HTTP_STATUS.BAD_REQUEST);
        }
        return await prisma.user.update({
            where: { id: userId },
            data: { role: newRole.toUpperCase() },
        });
    },
};
