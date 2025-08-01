"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeSlotRoutes = void 0;
const express_1 = __importDefault(require("express"));
const timeSlot_controller_1 = require("./timeSlot.controller");
const auth_1 = require("../../middlewares/auth");
const router = express_1.default.Router();
// Create a time slot (protected)
router.post('/', auth_1.authMiddleware, timeSlot_controller_1.createTimeSlot);
// Get all time slots for a specific doctor
router.get('/:doctorId', timeSlot_controller_1.getDoctorSlots);
// Update a time slot (protected)
router.patch('/:slotId', auth_1.authMiddleware, timeSlot_controller_1.updateTimeSlot);
// Delete a time slot (protected)
router.delete('/:slotId', auth_1.authMiddleware, timeSlot_controller_1.deleteTimeSlot);
exports.TimeSlotRoutes = router;
