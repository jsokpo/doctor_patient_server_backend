"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// import { PrismaClient } from '@prisma/client';
const routes_1 = __importDefault(require("./routes"));
const customError_1 = require("./errors/customError");
const responseHandler_1 = require("./shared/responseHandler");
const error_1 = require("./utils/error");
const app = (0, express_1.default)();
// const prisma = new PrismaClient();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use((0, morgan_1.default)('dev'));
// Routes
app.use('/api/v1', routes_1.default);
// Health Check
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Doctor-Patient Appointment API is running 🚀',
    });
});
// 404 Not Found Handler
app.use((req, res, next) => {
    next(new customError_1.NotFoundError(`Route ${req.originalUrl} not found`));
});
// Global Error Handler
app.use(responseHandler_1.errorHandler);
app.use(error_1.globalErrorHandler);
exports.default = app;
