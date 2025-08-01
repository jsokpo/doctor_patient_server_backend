"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMedicine = exports.updateMedicine = exports.getMedicineById = exports.getAllMedicines = exports.createMedicine = void 0;
const medicines_service_1 = require("./medicines.service");
const error_1 = require("../../utils/error");
const constants_1 = require("../../constants");
exports.createMedicine = (0, error_1.catchAsync)(async (req, res) => {
    const medicine = await medicines_service_1.MedicinesService.create(req.body);
    res.status(constants_1.HTTP_STATUS.CREATED).json({ success: true, data: medicine });
});
exports.getAllMedicines = (0, error_1.catchAsync)(async (req, res) => {
    const medicines = await medicines_service_1.MedicinesService.getAll();
    res.status(constants_1.HTTP_STATUS.OK).json({ success: true, data: medicines });
});
exports.getMedicineById = (0, error_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const medicine = await medicines_service_1.MedicinesService.getById(id);
    res.status(constants_1.HTTP_STATUS.OK).json({ success: true, data: medicine });
});
exports.updateMedicine = (0, error_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const updated = await medicines_service_1.MedicinesService.update(id, req.body);
    res.status(constants_1.HTTP_STATUS.OK).json({ success: true, data: updated });
});
exports.deleteMedicine = (0, error_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    await medicines_service_1.MedicinesService.remove(id);
    res.status(constants_1.HTTP_STATUS.NO_CONTENT).send();
});
