import Collection from "./collection.model.js";

/**
 * Create a new collection
 * @param {Object} collectionData 
 * @returns {Promise<Collection>}
 */
export const createCollection = async (collectionData) => {
    return await Collection.create(collectionData);
}

/**
 * Get all collections with query options
 * @param {Object} query - Query parameters (search, sort, page, limit)
 * @returns {Promise<Object>} - Collections and pagination metadata
 */
export const getAllCollections = async (query = {}) => {
    const { search, sort, page = 1, limit = 10, ...filters } = query;

    const mongoQuery = { ...filters };

    if (search) {
        mongoQuery.$or = [
            { name: { $regex: search, $options: "i" } },
            { description: { $regex: search, $options: "i" } }
        ];
    }

    // Build query
    let collectionQuery = Collection.find(mongoQuery);

    // Sorting
    if (sort) {
        const sortBy = sort.split(",").join(" ");
        collectionQuery = collectionQuery.sort(sortBy);
    } else {
        collectionQuery = collectionQuery.sort("-createdAt");
    }

    // Pagination
    const skip = (Number(page) - 1) * Number(limit);
    collectionQuery = collectionQuery.skip(skip).limit(Number(limit));

    const [collections, totalResults] = await Promise.all([
        collectionQuery,
        Collection.countDocuments(mongoQuery)
    ]);

    return {
        collections,
        totalResults,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(totalResults / Number(limit))
    };
}

/**
 * Get collection by ID or Slug
 * @param {string} idOrSlug 
 * @returns {Promise<Collection>}
 */
export const getCollectionByIdOrSlug = async (idOrSlug) => {
    if (idOrSlug.match(/^[0-9a-fA-F]{24}$/)) {
        return await Collection.findById(idOrSlug);
    }
    return await Collection.findOne({ slug: idOrSlug });
}

/**
 * Update collection by ID
 * @param {string} id 
 * @param {Object} collectionData 
 * @returns {Promise<Collection>}
 */
export const updateCollection = async (id, collectionData) => {
    return await Collection.findByIdAndUpdate(id, collectionData, { 
        new: true,
        runValidators: true
    });
}

/**
 * Delete collection by ID
 * @param {string} id 
 * @returns {Promise<Collection>}
 */
export const deleteCollection = async (id) => {
    return await Collection.findByIdAndDelete(id);
}
