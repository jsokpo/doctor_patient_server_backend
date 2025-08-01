import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '../../shared/prisma';
import { CustomError } from '../../errors/customError';
import { HTTP_STATUS } from '../../constants';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const JWT_EXPIRES_IN = '7d';

export const AuthService = {
  /**
   * Register a new user
   */
  register: async (userData: {
    name: string;
    email: string;
    password: string;
    role?: 'ADMIN' | 'DOCTOR' | 'PATIENT';
  }) => {
    const existingUser = await prisma.user.findUnique({
      where: { email: userData.email },
    });

    if (existingUser) {
      throw new CustomError('Email already exists', HTTP_STATUS.CONFLICT);
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const user = await prisma.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        password: hashedPassword,
        role: userData.role || 'PATIENT',
      },
    });

    const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    return { token, user: { id: user.id, name: user.name, email: user.email, role: user.role } };
  },

  /**
   * Authenticate user and generate token
   */
  login: async (credentials: { email: string; password: string }) => {
    const user = await prisma.user.findUnique({
      where: { email: credentials.email },
    });

    if (!user) {
      throw new CustomError('Invalid credentials', HTTP_STATUS.UNAUTHORIZED);
    }

    const isPasswordValid = await bcrypt.compare(credentials.password, user.password);

    if (!isPasswordValid) {
      throw new CustomError('Invalid credentials', HTTP_STATUS.UNAUTHORIZED);
    }

    const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    return { token, user: { id: user.id, name: user.name, email: user.email, role: user.role } };
  },
};
