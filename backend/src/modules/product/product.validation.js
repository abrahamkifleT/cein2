import Joi from "joi";

const createProduct = {
    body: Joi.object().keys({
        name: Joi.string().required().trim(),
        description: Joi.string().allow(""),
        category: Joi.string().required(), // Keeping as string for now as requested
        collections: Joi.array().items(Joi.string()),
        price: Joi.number().required().min(0),
        salePrice: Joi.number().min(0).allow(null),
        images: Joi.array().items(
            Joi.object().keys({
                url: Joi.string().required(),
                altText: Joi.string().allow("")
            })
        ),
        sku: Joi.string().allow(""),
        stock: Joi.number().min(0).default(0),
        tags: Joi.array().items(Joi.string()),
        rating: Joi.number().min(0).max(5).default(0)
    })
};

const updateProduct = {
    params: Joi.object().keys({
        id: Joi.string().required().pattern(/^[0-9a-fA-F]{24}$/) // MongoDB ObjectId pattern
    }),
    body: Joi.object().keys({
        name: Joi.string().trim(),
        description: Joi.string().allow(""),
        category: Joi.string(),
        collections: Joi.array().items(Joi.string()),
        price: Joi.number().min(0),
        salePrice: Joi.number().min(0).allow(null),
        images: Joi.array().items(
            Joi.object().keys({
                url: Joi.string().required(),
                altText: Joi.string().allow("")
            })
        ),
        sku: Joi.string().allow(""),
        stock: Joi.number().min(0),
        tags: Joi.array().items(Joi.string()),
        rating: Joi.number().min(0).max(5)
    }).min(1) // At least one field must be updated
};

const getProduct = {
    params: Joi.object().keys({
        id: Joi.string().required().pattern(/^[0-9a-fA-F]{24}$/)
    })
};

const deleteProduct = {
    params: Joi.object().keys({
        id: Joi.string().required().pattern(/^[0-9a-fA-F]{24}$/)
    })
};

export default {
    createProduct,
    updateProduct,
    getProduct,
    deleteProduct
};
