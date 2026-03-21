import Product from "./product.model.js";

/**
 * Create a new product
 * @param {Object} productData 
 * @returns {Promise<Product>}
 */
export const createProduct = async (productData) => {
    return await Product.create(productData);
}

/**
 * Get all products with query options
 * @param {Object} query - Query parameters (search, category, sort, page, limit)
 * @returns {Promise<Object>} - Products and pagination metadata
 */
export const getAllProducts = async (query = {}) => {
    const { search, category, sort, page = 1, limit = 10, ...filters } = query;

    const mongoQuery = { ...filters };

    if (search) {
        mongoQuery.$or = [
            { name: { $regex: search, $options: "i" } },
            { description: { $regex: search, $options: "i" } },
            { tags: { $in: [new RegExp(search, "i")] } }
        ];
    }

    if (category) {
        mongoQuery.category = category;
    }

    // Build query
    let productQuery = Product.find(mongoQuery);

    // Sorting
    if (sort) {
        const sortBy = sort.split(",").join(" ");
        productQuery = productQuery.sort(sortBy);
    } else {
        productQuery = productQuery.sort("-createdAt");
    }

    // Pagination
    const skip = (Number(page) - 1) * Number(limit);
    productQuery = productQuery.skip(skip).limit(Number(limit));

    const [products, totalResults] = await Promise.all([
        productQuery,
        Product.countDocuments(mongoQuery)
    ]);

    return {
        products,
        totalResults,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(totalResults / Number(limit))
    };
}

/**
 * Get product by ID
 * @param {string} id 
 * @returns {Promise<Product>}
 */
export const getProductById = async (id) => {
    return await Product.findById(id);
}

/**
 * Update product by ID
 * @param {string} id 
 * @param {Object} productData 
 * @returns {Promise<Product>}
 */
export const updateProduct = async (id, productData) => {
    return await Product.findByIdAndUpdate(id, productData, { 
        new: true,
        runValidators: true
    });
}

/**
 * Delete product by ID
 * @param {string} id 
 * @returns {Promise<Product>}
 */
export const deleteProduct = async (id) => {
    return await Product.findByIdAndDelete(id);
}