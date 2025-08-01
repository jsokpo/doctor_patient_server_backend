"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientRoutes = void 0;
const express_1 = __importDefault(require("express"));
const patient_controller_1 = require("./patient.controller");
const auth_1 = require("../../middlewares/auth");
const router = express_1.default.Router();
// Create a new patient (can be open or restricted)
router.post('/', auth_1.authMiddleware, patient_controller_1.createPatient);
// Get all patients (admin use)
router.get('/', auth_1.authMiddleware, patient_controller_1.getAllPatients);
// Get a patient by ID
router.get('/:id', auth_1.authMiddleware, patient_controller_1.getPatientById);
// Update a patient
router.patch('/:id', auth_1.authMiddleware, patient_controller_1.updatePatient);
// Delete a patient
router.delete('/:id', auth_1.authMiddleware, patient_controller_1.deletePatient);
exports.PatientRoutes = router;
