import express from 'express';
import {
  createMedicine,
  getAllMedicines,
  getMedicineById,
  updateMedicine,
  deleteMedicine,
} from './medicines.controller';
import { authMiddleware } from '../../middlewares/auth';

const router = express.Router();

// Create a new medicine (admin or authorized user only)
router.post('/', authMiddleware, createMedicine);

// Get all medicines
router.get('/', getAllMedicines);

// Get a single medicine by ID
router.get('/:id', getMedicineById);

// Update a medicine
router.patch('/:id', authMiddleware, updateMedicine);

// Delete a medicine
router.delete('/:id', authMiddleware, deleteMedicine);

export const MedicineRoutes = router;
