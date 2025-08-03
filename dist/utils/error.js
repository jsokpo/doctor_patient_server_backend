"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = exports.catchAsync = exports.AppError = void 0;
class AppError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.AppError = AppError;
const catchAsync = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};
exports.catchAsync = catchAsync;
// Handle specific error types if needed (placeholders for MongoDB/Prisma)
const handleValidationError = (err) => {
    const message = err.message || 'Validation error';
    return new AppError(message, 400);
};
const handleDuplicateKeyError = (err) => {
    const message = 'Duplicate field value entered';
    return new AppError(message, 400);
};
const sendErrorDev = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        stack: err.stack,
        error: err,
    });
};
const sendErrorProd = (err, res) => {
    // Operational, trusted error: send message to client
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
    }
    else {
        // Programming or unknown error: don't leak details
        console.error('ERROR 💥:', err);
        res.status(500).json({
            status: 'error',
            message: 'Something went very wrong!',
        });
    }
};
// Global error handler middleware
const globalErrorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    // Handle known errors (extendable)
    if (err.name === 'ValidationError')
        err = handleValidationError(err);
    if (err.code === 11000)
        err = handleDuplicateKeyError(err);
    if (process.env.NODE_ENV === 'development') {
        sendErrorDev(err, res);
    }
    else {
        sendErrorProd(err, res);
    }
};
exports.globalErrorHandler = globalErrorHandler;
