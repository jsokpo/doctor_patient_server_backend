import { prisma } from '../../shared/prisma';

export const AuthModel = {
  findUserByEmail: async (email: string) => {
    return await prisma.user.findUnique({
      where: { email },
    });
  },

  createUser: async (data: {
    name: string;
    email: string;
    password: string;
    role?: 'ADMIN' | 'DOCTOR' | 'PATIENT';
  }) => {
    return await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role || 'PATIENT',
      },
    });
  },
};
