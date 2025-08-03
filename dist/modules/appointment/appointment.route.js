"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const appointment_controller_1 = require("./appointment.controller");
const router = express_1.default.Router();
// Route: POST /api/v1/appointments
router.post('/', appointment_controller_1.createAppointment);
// Route: GET /api/v1/appointments?doctorId=xxx&patientId=xxx
router.get('/', appointment_controller_1.getAppointments);
// Route: GET /api/v1/appointments/:appointmentId
router.get('/:appointmentId', appointment_controller_1.getAppointmentById);
// Route: PATCH /api/v1/appointments/:appointmentId/status
router.patch('/:appointmentId/status', appointment_controller_1.updateAppointmentStatus);
// Route: DELETE /api/v1/appointments/:appointmentId
router.delete('/:appointmentId', appointment_controller_1.deleteAppointment);
exports.AppointmentRoutes = router;
