import { Request, Response } from 'express';
import { DoctorTimeSlotService } from './timeSlot.service';
import { catchAsync } from '../../shared/catchAsync';
import { sendResponse } from '../../shared/sendResponse';

export const createTimeSlot = catchAsync(async (req: Request, res: Response) => {
  const slotData = req.body;
  const result = await DoctorTimeSlotService.create(slotData);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Time slot created successfully',
    data: result,
  });
});

export const getDoctorSlots = catchAsync(async (req: Request, res: Response) => {
  const doctorId = req.params.doctorId;
  const result = await DoctorTimeSlotService.getSlotsByDoctor(doctorId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Doctor time slots fetched successfully',
    data: result,
  });
});

export const updateTimeSlot = catchAsync(async (req: Request, res: Response) => {
  const { slotId } = req.params;
  const updatedData = req.body;
  const result = await DoctorTimeSlotService.updateSlot(slotId, updatedData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Time slot updated successfully',
    data: result,
  });
});

export const deleteTimeSlot = catchAsync(async (req: Request, res: Response) => {
  const { slotId } = req.params;
  const result = await DoctorTimeSlotService.deleteSlot(slotId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Time slot deleted successfully',
    data: result,
  });
});
