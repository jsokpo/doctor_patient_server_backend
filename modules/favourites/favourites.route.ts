import express from 'express';
import {
  addFavouriteDoctor,
  getFavourites,
  removeFavourite,
} from './favourites.controller';
import { authMiddleware } from '../../middlewares/auth';

const router = express.Router();

// Add a doctor to favourites
router.post('/', authMiddleware, addFavouriteDoctor);

// Get all favourite doctors of a patient
router.get('/', authMiddleware, getFavourites);

// Remove a doctor from favourites
router.delete('/:doctorId', authMiddleware, removeFavourite);

export const FavouriteRoutes = router;
