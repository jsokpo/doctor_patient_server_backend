"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePatient = exports.updatePatient = exports.getPatientById = exports.getAllPatients = exports.createPatient = void 0;
const patient_service_1 = require("./patient.service");
const error_1 = require("../../utils/error");
const constants_1 = require("../../constants");
exports.createPatient = (0, error_1.catchAsync)(async (req, res) => {
    const patient = await patient_service_1.PatientService.create(req.body);
    res.status(constants_1.HTTP_STATUS.CREATED).json({ success: true, data: patient });
});
exports.getAllPatients = (0, error_1.catchAsync)(async (_req, res) => {
    const patients = await patient_service_1.PatientService.getAll();
    res.status(constants_1.HTTP_STATUS.OK).json({ success: true, data: patients });
});
exports.getPatientById = (0, error_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const patient = await patient_service_1.PatientService.getById(id);
    res.status(constants_1.HTTP_STATUS.OK).json({ success: true, data: patient });
});
exports.updatePatient = (0, error_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const updated = await patient_service_1.PatientService.update(id, req.body);
    res.status(constants_1.HTTP_STATUS.OK).json({ success: true, data: updated });
});
exports.deletePatient = (0, error_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    await patient_service_1.PatientService.remove(id);
    res.status(constants_1.HTTP_STATUS.NO_CONTENT).send();
});
