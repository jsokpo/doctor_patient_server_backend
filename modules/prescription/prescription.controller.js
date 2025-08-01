"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePrescription = exports.updatePrescription = exports.getPrescriptionById = exports.getAllPrescriptions = exports.createPrescription = void 0;
const prescription_service_1 = require("./prescription.service");
const error_1 = require("../../utils/error");
const constants_1 = require("../../constants");
exports.createPrescription = (0, error_1.catchAsync)(async (req, res) => {
    const prescription = await prescription_service_1.PrescriptionService.create(req.body);
    res.status(constants_1.HTTP_STATUS.CREATED).json({ success: true, data: prescription });
});
exports.getAllPrescriptions = (0, error_1.catchAsync)(async (_req, res) => {
    const prescriptions = await prescription_service_1.PrescriptionService.getAll();
    res.status(constants_1.HTTP_STATUS.OK).json({ success: true, data: prescriptions });
});
exports.getPrescriptionById = (0, error_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const prescription = await prescription_service_1.PrescriptionService.getById(id);
    res.status(constants_1.HTTP_STATUS.OK).json({ success: true, data: prescription });
});
exports.updatePrescription = (0, error_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const updated = await prescription_service_1.PrescriptionService.update(id, req.body);
    res.status(constants_1.HTTP_STATUS.OK).json({ success: true, data: updated });
});
exports.deletePrescription = (0, error_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    await prescription_service_1.PrescriptionService.remove(id);
    res.status(constants_1.HTTP_STATUS.NO_CONTENT).send();
});
