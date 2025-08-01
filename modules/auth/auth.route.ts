import express from 'express';
import { registerUser, loginUser } from './auth.controller';

const router = express.Router();

// Route: /api/v1/auth/register
router.post('/register', registerUser);

// Route: /api/v1/auth/login
router.post('/login', loginUser);

export const AuthRoutes = router;
