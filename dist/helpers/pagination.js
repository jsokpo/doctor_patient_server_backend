"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPagination = void 0;
const getPagination = (page, limit) => {
    const safePage = Number(page) || 1;
    const safeLimit = Number(limit) || 10;
    const skip = (safePage - 1) * safeLimit;
    return {
        page: safePage,
        limit: safeLimit,
        skip,
    };
};
exports.getPagination = getPagination;
