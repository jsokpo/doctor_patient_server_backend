"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// Import individual module routes
const auth_route_1 = require("../modules/auth/auth.route");
const doctor_route_1 = require("../modules/doctor/doctor.route");
const patient_route_1 = require("../modules/patient/patient.route");
const appointment_route_1 = require("../modules/appointment/appointment.route");
const admin_route_1 = __importDefault(require("../modules/admin/admin.route"));
const blog_route_1 = require("../modules/blog/blog.route");
const timeSlot_route_1 = require("../modules/doctorTimeSlot/timeSlot.route");
const favourites_route_1 = require("../modules/favourites/favourites.route");
const medicines_route_1 = require("../modules/medicines/medicines.route");
const prescription_route_1 = require("../modules/prescription/prescription.route");
const reviews_route_1 = require("../modules/reviews/reviews.route");
const router = (0, express_1.Router)();
// Define all module-level routes
router.use('/auth', auth_route_1.AuthRoutes);
router.use('/doctors', doctor_route_1.DoctorRoutes);
router.use('/patients', patient_route_1.PatientRoutes);
router.use('/appointments', appointment_route_1.AppointmentRoutes);
router.use('/admin', admin_route_1.default);
router.use('/blogs', blog_route_1.BlogRoutes);
router.use('/timeslots', timeSlot_route_1.TimeSlotRoutes);
router.use('/favourites', favourites_route_1.FavouriteRoutes);
router.use('/medicines', medicines_route_1.MedicineRoutes);
router.use('/prescriptions', prescription_route_1.PrescriptionRoutes);
router.use('/reviews', reviews_route_1.ReviewRoutes);
exports.default = router;
