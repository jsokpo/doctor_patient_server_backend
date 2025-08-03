"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasRole = void 0;
const hasRole = (userRole, allowedRoles) => {
    return allowedRoles.includes(userRole);
};
exports.hasRole = hasRole;
