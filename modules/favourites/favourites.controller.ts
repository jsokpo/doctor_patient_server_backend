import { Request, Response } from 'express';
import { FavouriteService } from './favourites.service';
import { catchAsync } from '../../utils/error';
import { HTTP_STATUS } from '../../constants';

export const addFavouriteDoctor = catchAsync(async (req: Request, res: Response) => {
  const { doctorId } = req.body;
  const patientId = req.user?.id; // Assumes req.user is populated by auth middleware

  if (!patientId) {
    throw new Error('Unauthorized: Patient ID not found');
  }

  const favourite = await FavouriteService.addFavourite(patientId, doctorId);
  res.status(HTTP_STATUS.CREATED).json({ success: true, data: favourite });
});

export const getFavourites = catchAsync(async (req: Request, res: Response) => {
  const patientId = req.user?.id;

  if (!patientId) {
    throw new Error('Unauthorized: Patient ID not found');
  }

  const favourites = await FavouriteService.getFavourites(patientId);
  res.status(HTTP_STATUS.OK).json({ success: true, data: favourites });
});

export const removeFavourite = catchAsync(async (req: Request, res: Response) => {
  const patientId = req.user?.id;
  const { doctorId } = req.params;

  if (!patientId) {
    throw new Error('Unauthorized: Patient ID not found');
  }

  await FavouriteService.removeFavourite(patientId, doctorId);
  res.status(HTTP_STATUS.OK).json({ success: true, message: 'Favourite removed' });
});
