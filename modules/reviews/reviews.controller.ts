import { Request, Response } from 'express';
import { ReviewService } from './reviews.service';
import { catchAsync } from '../../utils/error';
import { HTTP_STATUS } from '../../constants';

export const createReview = catchAsync(async (req: Request, res: Response) => {
  const review = await ReviewService.create(req.body);
  res.status(HTTP_STATUS.CREATED).json({ success: true, data: review });
});

export const getAllReviews = catchAsync(async (_req: Request, res: Response) => {
  const reviews = await ReviewService.getAll();
  res.status(HTTP_STATUS.OK).json({ success: true, data: reviews });
});

export const getReviewById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const review = await ReviewService.getById(id);
  res.status(HTTP_STATUS.OK).json({ success: true, data: review });
});

export const updateReview = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updated = await ReviewService.update(id, req.body);
  res.status(HTTP_STATUS.OK).json({ success: true, data: updated });
});

export const deleteReview = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await ReviewService.remove(id);
  res.status(HTTP_STATUS.NO_CONTENT).send();
});
