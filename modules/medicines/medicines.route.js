"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicineRoutes = void 0;
const express_1 = __importDefault(require("express"));
const medicines_controller_1 = require("./medicines.controller");
const auth_1 = require("../../middlewares/auth");
const router = express_1.default.Router();
// Create a new medicine (admin or authorized user only)
router.post('/', auth_1.authMiddleware, medicines_controller_1.createMedicine);
// Get all medicines
router.get('/', medicines_controller_1.getAllMedicines);
// Get a single medicine by ID
router.get('/:id', medicines_controller_1.getMedicineById);
// Update a medicine
router.patch('/:id', auth_1.authMiddleware, medicines_controller_1.updateMedicine);
// Delete a medicine
router.delete('/:id', auth_1.authMiddleware, medicines_controller_1.deleteMedicine);
exports.MedicineRoutes = router;
