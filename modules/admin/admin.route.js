"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_controller_1 = require("./admin.controller");
const auth_1 = require("../../middlewares/auth.ts");
const router = (0, express_1.Router)();
// All routes below are protected and admin-only
router.use(auth_1.authenticate);
router.use((0, auth_1.authorize)('admin'));
// GET all users
router.get('/users', admin_controller_1.getAllUsers);
// PATCH approve a doctor by ID
router.patch('/approve-doctor/:doctorId', admin_controller_1.approveDoctor);
// PATCH change a user's role
router.patch('/change-role/:userId', admin_controller_1.changeUserRole);
exports.default = router;
