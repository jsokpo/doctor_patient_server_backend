import express from 'express';
import {
  createPrescription,
  getAllPrescriptions,
  getPrescriptionById,
  updatePrescription,
  deletePrescription,
} from './prescription.controller';
import { authMiddleware } from '../../middlewares/auth';

const router = express.Router();

// Create a new prescription
router.post('/', authMiddleware, createPrescription);

// Get all prescriptions
router.get('/', authMiddleware, getAllPrescriptions);

// Get a prescription by ID
router.get('/:id', authMiddleware, getPrescriptionById);

// Update a prescription
router.patch('/:id', authMiddleware, updatePrescription);

// Delete a prescription
router.delete('/:id', authMiddleware, deletePrescription);

export const PrescriptionRoutes = router;
