import express from 'express';
import {
  createReview,
  getAllReviews,
  getReviewById,
  updateReview,
  deleteReview,
} from './reviews.controller';
import { authMiddleware } from '../../middlewares/auth';

const router = express.Router();

// Create a review
router.post('/', authMiddleware, createReview);

// Get all reviews
router.get('/', getAllReviews);

// Get a single review by ID
router.get('/:id', getReviewById);

// Update a review
router.patch('/:id', authMiddleware, updateReview);

// Delete a review
router.delete('/:id', authMiddleware, deleteReview);

export const ReviewRoutes = router;
