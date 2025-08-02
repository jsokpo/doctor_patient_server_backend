"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorRoutes = void 0;
const express_1 = __importDefault(require("express"));
const doctor_controller_1 = require("./doctor.controller");
const auth_1 = require("../../middlewares/auth.ts");
const router = express_1.default.Router();
// Public route: Get all doctors
router.get('/', doctor_controller_1.getAllDoctors);
// Public route: Get doctor by ID
router.get('/:id', doctor_controller_1.getDoctorById);
// Protected route: Create a doctor (only for authenticated users like admin)
router.post('/', auth_1.authMiddleware, doctor_controller_1.createDoctor);
// Protected route: Update a doctor
router.patch('/:id', auth_1.authMiddleware, doctor_controller_1.updateDoctor);
// Protected route: Delete a doctor
router.delete('/:id', auth_1.authMiddleware, doctor_controller_1.deleteDoctor);
exports.DoctorRoutes = router;
