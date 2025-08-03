"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const blog_controller_1 = require("./blog.controller");
const auth_1 = require("../../middlewares/auth");
const router = express_1.default.Router();
// Public route: Get all blog posts
router.get('/', blog_controller_1.getAllBlogs);
// Public route: Get a single blog post by ID
router.get('/:id', blog_controller_1.getBlogById);
// Protected route: Create a new blog post
router.post('/', auth_1.authMiddleware, blog_controller_1.createBlog);
// Protected route: Update a blog post
router.patch('/:id', auth_1.authMiddleware, blog_controller_1.updateBlog);
// Protected route: Delete a blog post
router.delete('/:id', auth_1.authMiddleware, blog_controller_1.deleteBlog);
exports.BlogRoutes = router;
