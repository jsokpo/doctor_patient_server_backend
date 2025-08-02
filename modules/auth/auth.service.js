"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = require("../../shared/prisma.js");
const customError_1 = require("../../errors/customError.js");
const constants_1 = require("../../constants/index.ts");
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const JWT_EXPIRES_IN = '7d';
exports.AuthService = {
    /**
     * Register a new user
     */
    register: async (userData) => {
        const existingUser = await prisma_1.prisma.user.findUnique({
            where: { email: userData.email },
        });
        if (existingUser) {
            throw new customError_1.CustomError('Email already exists', constants_1.HTTP_STATUS.CONFLICT);
        }
        const hashedPassword = await bcrypt_1.default.hash(userData.password, 10);
        const user = await prisma_1.prisma.user.create({
            data: {
                name: userData.name,
                email: userData.email,
                password: hashedPassword,
                role: userData.role || 'PATIENT',
            },
        });
        const token = jsonwebtoken_1.default.sign({ userId: user.id, role: user.role }, JWT_SECRET, {
            expiresIn: JWT_EXPIRES_IN,
        });
        return { token, user: { id: user.id, name: user.name, email: user.email, role: user.role } };
    },
    /**
     * Authenticate user and generate token
     */
    login: async (credentials) => {
        const user = await prisma_1.prisma.user.findUnique({
            where: { email: credentials.email },
        });
        if (!user) {
            throw new customError_1.CustomError('Invalid credentials', constants_1.HTTP_STATUS.UNAUTHORIZED);
        }
        const isPasswordValid = await bcrypt_1.default.compare(credentials.password, user.password);
        if (!isPasswordValid) {
            throw new customError_1.CustomError('Invalid credentials', constants_1.HTTP_STATUS.UNAUTHORIZED);
        }
        const token = jsonwebtoken_1.default.sign({ userId: user.id, role: user.role }, JWT_SECRET, {
            expiresIn: JWT_EXPIRES_IN,
        });
        return { token, user: { id: user.id, name: user.name, email: user.email, role: user.role } };
    },
};
