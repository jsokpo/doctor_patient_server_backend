"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReview = exports.updateReview = exports.getReviewById = exports.getAllReviews = exports.createReview = void 0;
const reviews_service_1 = require("./reviews.service");
const error_1 = require("../../utils/error");
const constants_1 = require("../../constants");
exports.createReview = (0, error_1.catchAsync)(async (req, res) => {
    const review = await reviews_service_1.ReviewService.create(req.body);
    res.status(constants_1.HTTP_STATUS.CREATED).json({ success: true, data: review });
});
exports.getAllReviews = (0, error_1.catchAsync)(async (_req, res) => {
    const reviews = await reviews_service_1.ReviewService.getAll();
    res.status(constants_1.HTTP_STATUS.OK).json({ success: true, data: reviews });
});
exports.getReviewById = (0, error_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const review = await reviews_service_1.ReviewService.getById(id);
    res.status(constants_1.HTTP_STATUS.OK).json({ success: true, data: review });
});
exports.updateReview = (0, error_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const updated = await reviews_service_1.ReviewService.update(id, req.body);
    res.status(constants_1.HTTP_STATUS.OK).json({ success: true, data: updated });
});
exports.deleteReview = (0, error_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    await reviews_service_1.ReviewService.remove(id);
    res.status(constants_1.HTTP_STATUS.NO_CONTENT).send();
});
