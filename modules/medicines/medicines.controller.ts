import { Request, Response } from 'express';
import { MedicinesService } from './medicines.service';
import { catchAsync } from '../../utils/error';
import { HTTP_STATUS } from '../../constants';

export const createMedicine = catchAsync(async (req: Request, res: Response) => {
  const medicine = await MedicinesService.create(req.body);
  res.status(HTTP_STATUS.CREATED).json({ success: true, data: medicine });
});

export const getAllMedicines = catchAsync(async (req: Request, res: Response) => {
  const medicines = await MedicinesService.getAll();
  res.status(HTTP_STATUS.OK).json({ success: true, data: medicines });
});

export const getMedicineById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const medicine = await MedicinesService.getById(id);
  res.status(HTTP_STATUS.OK).json({ success: true, data: medicine });
});

export const updateMedicine = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updated = await MedicinesService.update(id, req.body);
  res.status(HTTP_STATUS.OK).json({ success: true, data: updated });
});

export const deleteMedicine = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await MedicinesService.remove(id);
  res.status(HTTP_STATUS.NO_CONTENT).send();
});
