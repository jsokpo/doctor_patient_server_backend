"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicineType = exports.Specialization = exports.BlogStatus = exports.WeekDay = exports.AppointmentStatus = exports.Gender = exports.UserRole = void 0;
// User Roles
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["DOCTOR"] = "doctor";
    UserRole["PATIENT"] = "patient";
})(UserRole || (exports.UserRole = UserRole = {}));
// Gender
var Gender;
(function (Gender) {
    Gender["MALE"] = "male";
    Gender["FEMALE"] = "female";
    Gender["OTHER"] = "other";
})(Gender || (exports.Gender = Gender = {}));
// Appointment Status
var AppointmentStatus;
(function (AppointmentStatus) {
    AppointmentStatus["PENDING"] = "pending";
    AppointmentStatus["CONFIRMED"] = "confirmed";
    AppointmentStatus["CANCELLED"] = "cancelled";
    AppointmentStatus["COMPLETED"] = "completed";
})(AppointmentStatus || (exports.AppointmentStatus = AppointmentStatus = {}));
// Days of the Week for TimeSlots
var WeekDay;
(function (WeekDay) {
    WeekDay["MONDAY"] = "monday";
    WeekDay["TUESDAY"] = "tuesday";
    WeekDay["WEDNESDAY"] = "wednesday";
    WeekDay["THURSDAY"] = "thursday";
    WeekDay["FRIDAY"] = "friday";
    WeekDay["SATURDAY"] = "saturday";
    WeekDay["SUNDAY"] = "sunday";
})(WeekDay || (exports.WeekDay = WeekDay = {}));
// Blog Visibility
var BlogStatus;
(function (BlogStatus) {
    BlogStatus["DRAFT"] = "draft";
    BlogStatus["PUBLISHED"] = "published";
    BlogStatus["ARCHIVED"] = "archived";
})(BlogStatus || (exports.BlogStatus = BlogStatus = {}));
// Specialization Type (for Doctors)
var Specialization;
(function (Specialization) {
    Specialization["CARDIOLOGIST"] = "cardiologist";
    Specialization["DERMATOLOGIST"] = "dermatologist";
    Specialization["PEDIATRICIAN"] = "pediatrician";
    Specialization["NEUROLOGIST"] = "neurologist";
    Specialization["GENERAL_PRACTITIONER"] = "general_practitioner";
    Specialization["ORTHOPEDIC"] = "orthopedic";
    Specialization["GYNECOLOGIST"] = "gynecologist";
    Specialization["DENTIST"] = "dentist";
})(Specialization || (exports.Specialization = Specialization = {}));
// Medicine Types
var MedicineType;
(function (MedicineType) {
    MedicineType["TABLET"] = "tablet";
    MedicineType["CAPSULE"] = "capsule";
    MedicineType["SYRUP"] = "syrup";
    MedicineType["INJECTION"] = "injection";
    MedicineType["DROPS"] = "drops";
    MedicineType["OINTMENT"] = "ointment";
})(MedicineType || (exports.MedicineType = MedicineType = {}));
