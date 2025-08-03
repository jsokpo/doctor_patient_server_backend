"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTimeSlot = exports.updateTimeSlot = exports.getDoctorSlots = exports.createTimeSlot = void 0;
const timeSlot_service_1 = require("./timeSlot.service");
const catchAsync_1 = require("../../shared/catchAsync");
const sendResponse_1 = require("../../shared/sendResponse");
exports.createTimeSlot = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const slotData = req.body;
    const result = await timeSlot_service_1.DoctorTimeSlotService.create(slotData);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 201,
        success: true,
        message: 'Time slot created successfully',
        data: result,
    });
});
exports.getDoctorSlots = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const doctorId = req.params.doctorId;
    const result = await timeSlot_service_1.DoctorTimeSlotService.getSlotsByDoctor(doctorId);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: 'Doctor time slots fetched successfully',
        data: result,
    });
});
exports.updateTimeSlot = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { slotId } = req.params;
    const updatedData = req.body;
    const result = await timeSlot_service_1.DoctorTimeSlotService.updateSlot(slotId, updatedData);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: 'Time slot updated successfully',
        data: result,
    });
});
exports.deleteTimeSlot = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { slotId } = req.params;
    const result = await timeSlot_service_1.DoctorTimeSlotService.deleteSlot(slotId);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: 'Time slot deleted successfully',
        data: result,
    });
});
