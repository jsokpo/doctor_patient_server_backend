import { Router } from 'express';
import {
  getAllUsers,
  approveDoctor,
  changeUserRole,
} from './admin.controller';
import { authMiddleware, authorize } from '../../middlewares/auth';

const router = Router();

// All routes below are protected and admin-only
router.use(authMiddleware);
router.use(authorize('admin'));

// GET all users
router.get('/users', getAllUsers);

// PATCH approve a doctor by ID
router.patch('/approve-doctor/:doctorId', approveDoctor);

// PATCH change a user's role
router.patch('/change-role/:userId', changeUserRole);

export default router;
