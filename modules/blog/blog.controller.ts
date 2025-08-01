import { Request, Response } from 'express';
import { BlogService } from './blog.service';
import { catchAsync } from '../../shared/catchAsync';
import { sendResponse } from '../../shared/sendResponse';

export const createBlog = catchAsync(async (req: Request, res: Response) => {
  const blogData = req.body;
  const result = await BlogService.createBlog(blogData);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Blog post created successfully',
    data: result,
  });
});

export const getAllBlogs = catchAsync(async (_req: Request, res: Response) => {
  const result = await BlogService.getAllBlogs();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blogs retrieved successfully',
    data: result,
  });
});

export const getBlogById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BlogService.getBlogById(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog retrieved successfully',
    data: result,
  });
});

export const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const blogData = req.body;
  const result = await BlogService.updateBlog(id, blogData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog updated successfully',
    data: result,
  });
});

export const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BlogService.deleteBlog(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog deleted successfully',
    data: result,
  });
});
