import { Request, Response } from 'express';
import { PrescriptionService } from './prescription.service';
import { catchAsync } from '../../utils/error';
import { HTTP_STATUS } from '../../constants';

export const createPrescription = catchAsync(async (req: Request, res: Response) => {
  const prescription = await PrescriptionService.create(req.body);
  res.status(HTTP_STATUS.CREATED).json({ success: true, data: prescription });
});

export const getAllPrescriptions = catchAsync(async (_req: Request, res: Response) => {
  const prescriptions = await PrescriptionService.getAll();
  res.status(HTTP_STATUS.OK).json({ success: true, data: prescriptions });
});

export const getPrescriptionById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const prescription = await PrescriptionService.getById(id);
  res.status(HTTP_STATUS.OK).json({ success: true, data: prescription });
});

export const updatePrescription = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updated = await PrescriptionService.update(id, req.body);
  res.status(HTTP_STATUS.OK).json({ success: true, data: updated });
});

export const deletePrescription = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await PrescriptionService.remove(id);
  res.status(HTTP_STATUS.NO_CONTENT).send();
});
