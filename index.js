"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DayOfWeek = exports.AppointmentStatus = exports.Gender = exports.UserRole = void 0;
// User roles
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
// Appointment status
var AppointmentStatus;
(function (AppointmentStatus) {
    AppointmentStatus["PENDING"] = "pending";
    AppointmentStatus["CONFIRMED"] = "confirmed";
    AppointmentStatus["CANCELLED"] = "cancelled";
    AppointmentStatus["COMPLETED"] = "completed";
})(AppointmentStatus || (exports.AppointmentStatus = AppointmentStatus = {}));
// Days of the week (used for doctor availability or scheduling)
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek["SUNDAY"] = "Sunday";
    DayOfWeek["MONDAY"] = "Monday";
    DayOfWeek["TUESDAY"] = "Tuesday";
    DayOfWeek["WEDNESDAY"] = "Wednesday";
    DayOfWeek["THURSDAY"] = "Thursday";
    DayOfWeek["FRIDAY"] = "Friday";
    DayOfWeek["SATURDAY"] = "Saturday";
})(DayOfWeek || (exports.DayOfWeek = DayOfWeek = {}));
