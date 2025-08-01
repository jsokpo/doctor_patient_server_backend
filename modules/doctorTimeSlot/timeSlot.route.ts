import express from 'express';
import {
  createTimeSlot,
  getDoctorSlots,
  updateTimeSlot,
  deleteTimeSlot,
} from './timeSlot.controller';
import { authMiddleware } from '../../middlewares/auth';

const router = express.Router();

// Create a time slot (protected)
router.post('/', authMiddleware, createTimeSlot);

// Get all time slots for a specific doctor
router.get('/:doctorId', getDoctorSlots);

// Update a time slot (protected)
router.patch('/:slotId', authMiddleware, updateTimeSlot);

// Delete a time slot (protected)
router.delete('/:slotId', authMiddleware, deleteTimeSlot);

export const TimeSlotRoutes = router;
