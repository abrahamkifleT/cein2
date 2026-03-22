import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { 
    createBlog, 
    getAllBlogs, 
    getBlogByIdOrSlug, 
    updateBlog, 
    deleteBlog 
} from "./blog.service.js";

/**
 * @desc    Create a new blog post
 * @route   POST /api/blogs
 * @access  Private/Admin
 */
export const createBlogController = asyncHandler(async (req, res) => {
    // Author id comes from verifyJWT middleware (req.user._id)
    const blog = await createBlog(req.body, req.user._id);
    
    if (!blog) {
        throw new ApiError(500, "Failed to create blog post");
    }

    return res.status(201).json(
        new ApiResponse(201, blog, "Blog post created successfully")
    );
});

/**
 * @desc    Get all blog posts with filtering, search, and pagination
 * @route   GET /api/blogs
 * @access  Public
 */
export const getAllBlogsController = asyncHandler(async (req, res) => {
    const data = await getAllBlogs(req.query);
    
    return res.status(200).json(
        new ApiResponse(200, data, "Blog posts fetched successfully")
    );
});

/**
 * @desc    Get blog by ID or Slug
 * @route   GET /api/blogs/:id
 * @access  Public
 */
export const getBlogByIdOrSlugController = asyncHandler(async (req, res) => {
    const blog = await getBlogByIdOrSlug(req.params.id);

    if (!blog) {
        throw new ApiError(404, "Blog post not found");
    }

    return res.status(200).json(
        new ApiResponse(200, blog, "Blog post fetched successfully")
    );
});

/**
 * @desc    Update blog by ID
 * @route   PUT /api/blogs/:id
 * @access  Private/Admin
 */
export const updateBlogController = asyncHandler(async (req, res) => {
    const blog = await updateBlog(req.params.id, req.body);

    if (!blog) {
        throw new ApiError(404, "Blog post not found");
    }

    return res.status(200).json(
        new ApiResponse(200, blog, "Blog post updated successfully")
    );
});

/**
 * @desc    Delete blog by ID
 * @route   DELETE /api/blogs/:id
 * @access  Private/Admin
 */
export const deleteBlogController = asyncHandler(async (req, res) => {
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
        throw new ApiError(400, "Invalid blog ID format");
    }

    const blog = await deleteBlog(req.params.id);

    if (!blog) {
        throw new ApiError(404, "Blog post not found");
    }

    return res.status(200).json(
        new ApiResponse(200, null, "Blog post deleted successfully")
    );
});
