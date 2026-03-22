import Blog from "./blog.model.js";

/**
 * Create a new blog post
 * @param {Object} blogData 
 * @param {string} userId - Author of the blog
 * @returns {Promise<Blog>}
 */
export const createBlog = async (blogData, userId) => {
    return await Blog.create({
        ...blogData,
        author: userId
    });
}

/**
 * Get all blog posts with query options
 * @param {Object} query - Query parameters (search, tag, author, status, sort, page, limit)
 * @returns {Promise<Object>} - Blogs and pagination metadata
 */
export const getAllBlogs = async (query = {}) => {
    const { search, tag, author, status, sort, page = 1, limit = 10, ...filters } = query;

    const mongoQuery = { ...filters };

    if (search) {
        mongoQuery.$or = [
            { title: { $regex: search, $options: "i" } },
            { content: { $regex: search, $options: "i" } },
            { excerpt: { $regex: search, $options: "i" } }
        ];
    }

    if (tag) {
        mongoQuery.tags = tag;
    }

    if (author) {
        mongoQuery.author = author;
    }

    if (status) {
        mongoQuery.status = status;
    }

    // Build query
    let blogQuery = Blog.find(mongoQuery).populate("author", "name email");

    // Sorting
    if (sort) {
        const sortBy = sort.split(",").join(" ");
        blogQuery = blogQuery.sort(sortBy);
    } else {
        blogQuery = blogQuery.sort("-createdAt");
    }

    // Pagination
    const skip = (Number(page) - 1) * Number(limit);
    blogQuery = blogQuery.skip(skip).limit(Number(limit));

    const [blogs, totalResults] = await Promise.all([
        blogQuery,
        Blog.countDocuments(mongoQuery)
    ]);

    return {
        blogs,
        totalResults,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(totalResults / Number(limit))
    };
}

/**
 * Get blog by ID or Slug
 * @param {string} idOrSlug 
 * @returns {Promise<Blog>}
 */
export const getBlogByIdOrSlug = async (idOrSlug) => {
    const query = idOrSlug.match(/^[0-9a-fA-F]{24}$/) 
        ? { _id: idOrSlug } 
        : { slug: idOrSlug };
    
    return await Blog.findOne(query).populate("author", "name email");
}

/**
 * Update blog by ID
 * @param {string} id 
 * @param {Object} blogData 
 * @returns {Promise<Blog>}
 */
export const updateBlog = async (id, blogData) => {
    return await Blog.findByIdAndUpdate(id, blogData, { 
        new: true,
        runValidators: true
    }).populate("author", "name email");
}

/**
 * Delete blog by ID
 * @param {string} id 
 * @returns {Promise<Blog>}
 */
export const deleteBlog = async (id) => {
    return await Blog.findByIdAndDelete(id);
}
