import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { 
    createProduct, 
    getAllProducts, 
    getProductById, 
    updateProduct, 
    deleteProduct 
} from "./product.service.js";

/**
 * @desc    Create a new product
 * @route   POST /api/products
 * @access  Private/Admin
 */
export const createProductController = asyncHandler(async (req, res) => {
    const product = await createProduct(req.body);
    
    if (!product) {
        throw new ApiError(500, "Failed to create product");
    }

    return res.status(201).json(
        new ApiResponse(201, product, "Product created successfully")
    );
});

/**
 * @desc    Get all products with filtering, search, and pagination
 * * @route   GET /api/products
 * @access  Public
 */
export const getAllProductsController = asyncHandler(async (req, res) => {
    const data = await getAllProducts(req.query);
    
    return res.status(200).json(
        new ApiResponse(200, data, "Products fetched successfully")
    );
});

/**
 * @desc    Get product by ID
 * @route   GET /api/products/:id
 * @access  Public
 */
export const getProductByIdController = asyncHandler(async (req, res) => {
    const product = await getProductById(req.params.id);

    if (!product) {
        throw new ApiError(404, "Product not found");
    }

    return res.status(200).json(
        new ApiResponse(200, product, "Product fetched successfully")
    );
});

/**
 * @desc    Update product by ID
 * @route   PUT /api/products/:id
 * @access  Private/Admin
 */
export const updateProductController = asyncHandler(async (req, res) => {
    const product = await updateProduct(req.params.id, req.body);

    if (!product) {
        throw new ApiError(404, "Product not found");
    }

    return res.status(200).json(
        new ApiResponse(200, product, "Product updated successfully")
    );
});

/**
 * @desc    Delete product by ID
 * @route   DELETE /api/products/:id
 * @access  Private/Admin
 */
export const deleteProductController = asyncHandler(async (req, res) => {
    const product = await deleteProduct(req.params.id);

    if (!product) {
        throw new ApiError(404, "Product not found");
    }

    return res.status(200).json(
        new ApiResponse(200, null, "Product deleted successfully")
    );
});