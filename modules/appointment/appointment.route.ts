import express from 'express';
import {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointmentStatus,
  deleteAppointment,
} from './appointment.controller';

const router = express.Router();

// Route: POST /api/v1/appointments
router.post('/', createAppointment);

// Route: GET /api/v1/appointments?doctorId=xxx&patientId=xxx
router.get('/', getAppointments);

// Route: GET /api/v1/appointments/:appointmentId
router.get('/:appointmentId', getAppointmentById);

// Route: PATCH /api/v1/appointments/:appointmentId/status
router.patch('/:appointmentId/status', updateAppointmentStatus);

// Route: DELETE /api/v1/appointments/:appointmentId
router.delete('/:appointmentId', deleteAppointment);

export const AppointmentRoutes = router;
