"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrescriptionRoutes = void 0;
const express_1 = __importDefault(require("express"));
const prescription_controller_1 = require("./prescription.controller");
const auth_1 = require("../../middlewares/auth");
const router = express_1.default.Router();
// Create a new prescription
router.post('/', auth_1.authMiddleware, prescription_controller_1.createPrescription);
// Get all prescriptions
router.get('/', auth_1.authMiddleware, prescription_controller_1.getAllPrescriptions);
// Get a prescription by ID
router.get('/:id', auth_1.authMiddleware, prescription_controller_1.getPrescriptionById);
// Update a prescription
router.patch('/:id', auth_1.authMiddleware, prescription_controller_1.updatePrescription);
// Delete a prescription
router.delete('/:id', auth_1.authMiddleware, prescription_controller_1.deletePrescription);
exports.PrescriptionRoutes = router;
