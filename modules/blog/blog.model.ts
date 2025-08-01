import { prisma } from '../../shared/prisma';

export const BlogModel = {
  create: async (data: {
  title: string;
  content: string;
  authorId: string;
  authorName: string;
  tags?: string[];
}) => {
  return await prisma.blog.create({
    data: {
      title: data.title,
      content: data.content,
      tags: data.tags || [],
      authorName: data.authorName, // ✅ Required field
      authorId: data.authorId,     // ✅ Prisma will link via scalar
    },
  });
},

  findAll: async () => {
    return await prisma.blog.findMany({
      orderBy: { createdAt: 'desc' },
      include: { User: true },
    });
  },

  findById: async (id: string) => {
    return await prisma.blog.findUnique({
      where: { id },
      include: { User: true },
    });
  },

  update: async (
    id: string,
    data: Partial<{ title: string; content: string; tags: string[] }>
  ) => {
    return await prisma.blog.update({
      where: { id },
      data,
    });
  },

  delete: async (id: string) => {
    return await prisma.blog.delete({
      where: { id },
    });
  },
};
