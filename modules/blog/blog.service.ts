import { prisma } from '../../shared/prisma';
import { CustomError } from '../../errors/customError';
import { HTTP_STATUS } from '../../constants';

export const BlogService = {
  createBlog: async (data: {
  title: string;
  content: string;
  authorId: string;
  authorName: string; // ✅ Add this
  tags?: string[];
}) => {
  return await prisma.blog.create({
    data: {
      title: data.title,
      content: data.content,
      authorId: data.authorId,
      authorName: data.authorName, // ✅ Required field
      tags: data.tags || [],
    },
  });
},

  getAllBlogs: async () => {
    return await prisma.blog.findMany({
      orderBy: { createdAt: 'desc' },
      include: { User: true },
    });
  },

  getBlogById: async (id: string) => {
    const blog = await prisma.blog.findUnique({
      where: { id },
      include: { User: true },
    });

    if (!blog) {
      throw new CustomError('Blog not found', HTTP_STATUS.NOT_FOUND);
    }

    return blog;
  },

  updateBlog: async (id: string, data: Partial<{ title: string; content: string; tags: string[] }>) => {
    const blog = await prisma.blog.findUnique({ where: { id } });

    if (!blog) {
      throw new CustomError('Blog not found', HTTP_STATUS.NOT_FOUND);
    }

    return await prisma.blog.update({
      where: { id },
      data,
    });
  },

  deleteBlog: async (id: string) => {
    const blog = await prisma.blog.findUnique({ where: { id } });

    if (!blog) {
      throw new CustomError('Blog not found', HTTP_STATUS.NOT_FOUND);
    }

    return await prisma.blog.delete({ where: { id } });
  },
};
