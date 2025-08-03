"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFavourite = exports.getFavourites = exports.addFavouriteDoctor = void 0;
const favourites_service_1 = require("./favourites.service");
const error_1 = require("../../utils/error");
const constants_1 = require("../../constants");
exports.addFavouriteDoctor = (0, error_1.catchAsync)(async (req, res) => {
    const { doctorId } = req.body;
    const patientId = req.user?.id; // Assumes req.user is populated by auth middleware
    if (!patientId) {
        throw new Error('Unauthorized: Patient ID not found');
    }
    const favourite = await favourites_service_1.FavouriteService.addFavourite(patientId, doctorId);
    res.status(constants_1.HTTP_STATUS.CREATED).json({ success: true, data: favourite });
});
exports.getFavourites = (0, error_1.catchAsync)(async (req, res) => {
    const patientId = req.user?.id;
    if (!patientId) {
        throw new Error('Unauthorized: Patient ID not found');
    }
    const favourites = await favourites_service_1.FavouriteService.getFavourites(patientId);
    res.status(constants_1.HTTP_STATUS.OK).json({ success: true, data: favourites });
});
exports.removeFavourite = (0, error_1.catchAsync)(async (req, res) => {
    const patientId = req.user?.id;
    const { doctorId } = req.params;
    if (!patientId) {
        throw new Error('Unauthorized: Patient ID not found');
    }
    await favourites_service_1.FavouriteService.removeFavourite(patientId, doctorId);
    res.status(constants_1.HTTP_STATUS.OK).json({ success: true, message: 'Favourite removed' });
});
