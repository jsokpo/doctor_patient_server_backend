"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MESSAGES = exports.PAGINATION = exports.HTTP_STATUS = exports.APPOINTMENT_STATUS = exports.USER_ROLES = void 0;
// User roles
exports.USER_ROLES = {
    ADMIN: 'admin',
    DOCTOR: 'doctor',
    PATIENT: 'patient',
};
// Appointment statuses
exports.APPOINTMENT_STATUS = {
    PENDING: 'pending',
    CONFIRMED: 'confirmed',
    CANCELLED: 'cancelled',
    COMPLETED: 'completed',
};
// HTTP status codes
exports.HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    SERVER_ERROR: 500,
};
// Default pagination values
exports.PAGINATION = {
    DEFAULT_PAGE: 1,
    DEFAULT_LIMIT: 10,
};
// Messages
exports.MESSAGES = {
    AUTH_REQUIRED: 'Authentication required',
    FORBIDDEN_ACCESS: 'You do not have permission to access this resource',
    NOT_FOUND: 'Resource not found',
    SERVER_ERROR: 'Internal server error',
};
