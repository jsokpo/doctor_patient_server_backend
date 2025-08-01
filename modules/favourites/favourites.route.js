"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavouriteRoutes = void 0;
const express_1 = __importDefault(require("express"));
const favourites_controller_1 = require("./favourites.controller");
const auth_1 = require("../../middlewares/auth");
const router = express_1.default.Router();
// Add a doctor to favourites
router.post('/', auth_1.authMiddleware, favourites_controller_1.addFavouriteDoctor);
// Get all favourite doctors of a patient
router.get('/', auth_1.authMiddleware, favourites_controller_1.getFavourites);
// Remove a doctor from favourites
router.delete('/:doctorId', auth_1.authMiddleware, favourites_controller_1.removeFavourite);
exports.FavouriteRoutes = router;
