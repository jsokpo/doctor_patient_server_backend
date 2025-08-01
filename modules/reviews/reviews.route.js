"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewRoutes = void 0;
const express_1 = __importDefault(require("express"));
const reviews_controller_1 = require("./reviews.controller");
const auth_1 = require("../../middlewares/auth");
const router = express_1.default.Router();
// Create a review
router.post('/', auth_1.authMiddleware, reviews_controller_1.createReview);
// Get all reviews
router.get('/', reviews_controller_1.getAllReviews);
// Get a single review by ID
router.get('/:id', reviews_controller_1.getReviewById);
// Update a review
router.patch('/:id', auth_1.authMiddleware, reviews_controller_1.updateReview);
// Delete a review
router.delete('/:id', auth_1.authMiddleware, reviews_controller_1.deleteReview);
exports.ReviewRoutes = router;
