import Joi from "joi";

const createBlog = {
    body: Joi.object().keys({
        title: Joi.string().required().trim(),
        content: Joi.string().required(),
        excerpt: Joi.string().allow(""),
        featuredImage: Joi.object().keys({
            url: Joi.string().required(),
            altText: Joi.string().allow("")
        }),
        tags: Joi.array().items(Joi.string()),
        status: Joi.string().valid("draft", "published"),
        seo: Joi.object().keys({
            metaTitle: Joi.string().allow(""),
            metaDescription: Joi.string().allow(""),
            canonicalUrl: Joi.string().uri().allow("")
        })
    })
};

const updateBlog = {
    params: Joi.object().keys({
        id: Joi.string().required().pattern(/^[0-9a-fA-F]{24}$/)
    }),
    body: Joi.object().keys({
        title: Joi.string().trim(),
        content: Joi.string(),
        excerpt: Joi.string().allow(""),
        featuredImage: Joi.object().keys({
            url: Joi.string().required(),
            altText: Joi.string().allow("")
        }),
        tags: Joi.array().items(Joi.string()),
        status: Joi.string().valid("draft", "published"),
        seo: Joi.object().keys({
            metaTitle: Joi.string().allow(""),
            metaDescription: Joi.string().allow(""),
            canonicalUrl: Joi.string().uri().allow("")
        })
    }).min(1)
};

const getBlog = {
    params: Joi.object().keys({
        id: Joi.string().required() // Can be ID or slug
    })
};

const deleteBlog = {
    params: Joi.object().keys({
        id: Joi.string().required().pattern(/^[0-9a-fA-F]{24}$/)
    })
};

export default {
    createBlog,
    updateBlog,
    getBlog,
    deleteBlog
};
