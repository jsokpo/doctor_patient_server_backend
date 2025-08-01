import express from 'express';
import {
  createDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
} from './doctor.controller';
import { authMiddleware } from '../../middlewares/auth';

const router = express.Router();

// Public route: Get all doctors
router.get('/', getAllDoctors);

// Public route: Get doctor by ID
router.get('/:id', getDoctorById);

// Protected route: Create a doctor (only for authenticated users like admin)
router.post('/', authMiddleware, createDoctor);

// Protected route: Update a doctor
router.patch('/:id', authMiddleware, updateDoctor);

// Protected route: Delete a doctor
router.delete('/:id', authMiddleware, deleteDoctor);

export const DoctorRoutes = router;
