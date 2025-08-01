import { Request, Response } from 'express';
import { PatientService } from './patient.service';
import { catchAsync } from '../../utils/error';
import { HTTP_STATUS } from '../../constants';

export const createPatient = catchAsync(async (req: Request, res: Response) => {
  const patient = await PatientService.create(req.body);
  res.status(HTTP_STATUS.CREATED).json({ success: true, data: patient });
});

export const getAllPatients = catchAsync(async (_req: Request, res: Response) => {
  const patients = await PatientService.getAll();
  res.status(HTTP_STATUS.OK).json({ success: true, data: patients });
});

export const getPatientById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const patient = await PatientService.getById(id);
  res.status(HTTP_STATUS.OK).json({ success: true, data: patient });
});

export const updatePatient = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updated = await PatientService.update(id, req.body);
  res.status(HTTP_STATUS.OK).json({ success: true, data: updated });
});

export const deletePatient = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await PatientService.remove(id);
  res.status(HTTP_STATUS.NO_CONTENT).send();
});
