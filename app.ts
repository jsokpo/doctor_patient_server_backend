import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
// import { PrismaClient } from '@prisma/client';
import routes from './routes';
import { NotFoundError } from './errors/customError';
import { errorHandler } from './shared/responseHandler';
import { globalErrorHandler } from './utils/error';

const app: Application = express();
// const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));

// Routes
app.use('/api/v1', routes);

// Health Check
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Doctor-Patient Appointment API is running 🚀',
  });
});

// 404 Not Found Handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(new NotFoundError(`Route ${req.originalUrl} not found`));
});

// Global Error Handler
app.use(errorHandler);
app.use(globalErrorHandler);

export default app;
