"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
const formatDate = (date) => {
    return new Date(date).toISOString();
};
exports.formatDate = formatDate;
