import express from 'express';
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} from './blog.controller';
import { authMiddleware } from '../../middlewares/auth';

const router = express.Router();

// Public route: Get all blog posts
router.get('/', getAllBlogs);

// Public route: Get a single blog post by ID
router.get('/:id', getBlogById);

// Protected route: Create a new blog post
router.post('/', authMiddleware, createBlog);

// Protected route: Update a blog post
router.patch('/:id', authMiddleware, updateBlog);

// Protected route: Delete a blog post
router.delete('/:id', authMiddleware, deleteBlog);

export const BlogRoutes = router;
