"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDoctor = exports.updateDoctor = exports.getDoctorById = exports.getAllDoctors = exports.createDoctor = void 0;
const doctor_service_1 = require("./doctor.service.js");
const catchAsync_1 = require("../../shared/catchAsync.js");
const sendResponse_1 = require("../../shared/sendResponse.js");
exports.createDoctor = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const doctorData = req.body;
    const result = await doctor_service_1.DoctorService.createDoctor(doctorData);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 201,
        success: true,
        message: 'Doctor created successfully',
        data: result,
    });
});
exports.getAllDoctors = (0, catchAsync_1.catchAsync)(async (_req, res) => {
    const result = await doctor_service_1.DoctorService.getAllDoctors();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: 'Doctors retrieved successfully',
        data: result,
    });
});
exports.getDoctorById = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const result = await doctor_service_1.DoctorService.getDoctorById(id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: 'Doctor retrieved successfully',
        data: result,
    });
});
exports.updateDoctor = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    const result = await doctor_service_1.DoctorService.updateDoctor(id, updatedData);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: 'Doctor updated successfully',
        data: result,
    });
});
exports.deleteDoctor = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const result = await doctor_service_1.DoctorService.deleteDoctor(id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: 'Doctor deleted successfully',
        data: result,
    });
});
