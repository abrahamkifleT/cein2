import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { 
    createCollection, 
    getAllCollections, 
    getCollectionByIdOrSlug, 
    updateCollection, 
    deleteCollection 
} from "./collection.service.js";

/**
 * @desc    Create a new collection
 * @route   POST /api/collections
 * @access  Private/Admin
 */
export const createCollectionController = asyncHandler(async (req, res) => {
    const collection = await createCollection(req.body);
    
    if (!collection) {
        throw new ApiError(500, "Failed to create collection");
    }

    return res.status(201).json(
        new ApiResponse(201, collection, "Collection created successfully")
    );
});

/**
 * @desc    Get all collections with search and pagination
 * @route   GET /api/collections
 * @access  Public
 */
export const getAllCollectionsController = asyncHandler(async (req, res) => {
    const data = await getAllCollections(req.query);
    
    return res.status(200).json(
        new ApiResponse(200, data, "Collections fetched successfully")
    );
});

/**
 * @desc    Get collection by ID or Slug
 * @route   GET /api/collections/:id
 * @access  Public
 */
export const getCollectionByIdOrSlugController = asyncHandler(async (req, res) => {
    const collection = await getCollectionByIdOrSlug(req.params.id);

    if (!collection) {
        throw new ApiError(404, "Collection not found");
    }

    return res.status(200).json(
        new ApiResponse(200, collection, "Collection fetched successfully")
    );
});

/**
 * @desc    Update collection by ID
 * @route   PUT /api/collections/:id
 * @access  Private/Admin
 */
export const updateCollectionController = asyncHandler(async (req, res) => {
    const collection = await updateCollection(req.params.id, req.body);

    if (!collection) {
        throw new ApiError(404, "Collection not found");
    }

    return res.status(200).json(
        new ApiResponse(200, collection, "Collection updated successfully")
    );
});

/**
 * @desc    Delete collection by ID
 * @route   DELETE /api/collections/:id
 * @access  Private/Admin
 */
export const deleteCollectionController = asyncHandler(async (req, res) => {
    // We only support deletion by ID (ObjectId) for security consistency
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
        throw new ApiError(400, "Invalid collection ID format");
    }

    const collection = await deleteCollection(req.params.id);

    if (!collection) {
        throw new ApiError(404, "Collection not found");
    }

    return res.status(200).json(
        new ApiResponse(200, null, "Collection deleted successfully")
    );
});
