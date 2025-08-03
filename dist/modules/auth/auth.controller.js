"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const auth_service_1 = require("./auth.service");
const sendResponse_1 = require("../../shared/sendResponse");
const catchAsync_1 = require("../../shared/catchAsync");
exports.registerUser = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const userData = req.body;
    const result = await auth_service_1.AuthService.register(userData);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 201,
        success: true,
        message: 'User registered successfully',
        data: result,
    });
});
exports.loginUser = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const credentials = req.body;
    const result = await auth_service_1.AuthService.login(credentials);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: 'Login successful',
        data: result,
    });
});
