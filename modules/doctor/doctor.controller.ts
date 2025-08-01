import { Request, Response } from 'express';
import { DoctorService } from './doctor.service';
import { catchAsync } from '../../shared/catchAsync';
import { sendResponse } from '../../shared/sendResponse';

export const createDoctor = catchAsync(async (req: Request, res: Response) => {
  const doctorData = req.body;
  const result = await DoctorService.createDoctor(doctorData);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Doctor created successfully',
    data: result,
  });
});

export const getAllDoctors = catchAsync(async (_req: Request, res: Response) => {
  const result = await DoctorService.getAllDoctors();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Doctors retrieved successfully',
    data: result,
  });
});

export const getDoctorById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await DoctorService.getDoctorById(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Doctor retrieved successfully',
    data: result,
  });
});

export const updateDoctor = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedData = req.body;
  const result = await DoctorService.updateDoctor(id, updatedData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Doctor updated successfully',
    data: result,
  });
});

export const deleteDoctor = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await DoctorService.deleteDoctor(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Doctor deleted successfully',
    data: result,
  });
});
