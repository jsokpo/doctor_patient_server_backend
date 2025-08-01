import express from 'express';
import {
  createPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient,
} from './patient.controller';
import { authMiddleware } from '../../middlewares/auth';

const router = express.Router();

// Create a new patient (can be open or restricted)
router.post('/', authMiddleware, createPatient);

// Get all patients (admin use)
router.get('/', authMiddleware, getAllPatients);

// Get a patient by ID
router.get('/:id', authMiddleware, getPatientById);

// Update a patient
router.patch('/:id', authMiddleware, updatePatient);

// Delete a patient
router.delete('/:id', authMiddleware, deletePatient);

export const PatientRoutes = router;
