"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config/config");
const customError_1 = require("../errors/customError");
/**
 * Middleware to verify JWT token
 */
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return next(new customError_1.CustomError('Authentication token missing or malformed', 401));
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, config_1.config.jwt.secret);
        req.user = decoded;
        next();
    }
    catch (err) {
        next(new customError_1.CustomError('Invalid or expired token', 401));
    }
};
exports.authMiddleware = authMiddleware;
/**
 * Middleware to authorize specific roles
 */
const authorize = (...roles) => (req, res, next) => {
    if (!req.user) {
        return next(new customError_1.CustomError('User not authenticated', 401));
    }
    if (!roles.includes(req.user.role)) {
        return next(new customError_1.CustomError('Access forbidden: insufficient permissions', 403));
    }
    next();
};
exports.authorize = authorize;
