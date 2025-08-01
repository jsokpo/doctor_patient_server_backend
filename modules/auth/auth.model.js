"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModel = void 0;
const prisma_1 = require("../../shared/prisma");
exports.AuthModel = {
    findUserByEmail: async (email) => {
        return await prisma_1.prisma.user.findUnique({
            where: { email },
        });
    },
    createUser: async (data) => {
        return await prisma_1.prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: data.password,
                role: data.role || 'PATIENT',
            },
        });
    },
};
