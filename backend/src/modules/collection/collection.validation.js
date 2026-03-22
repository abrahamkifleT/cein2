import Joi from "joi";

const createCollection = {
    body: Joi.object().keys({
        name: Joi.string().required().trim(),
        description: Joi.string().allow(""),
        image: Joi.object().keys({
            url: Joi.string().required(),
            altText: Joi.string().allow("")
        }),
        featured: Joi.boolean(),
        status: Joi.string().valid("active", "inactive")
    })
};

const updateCollection = {
    params: Joi.object().keys({
        id: Joi.string().required().pattern(/^[0-9a-fA-F]{24}$/)
    }),
    body: Joi.object().keys({
        name: Joi.string().trim(),
        description: Joi.string().allow(""),
        image: Joi.object().keys({
            url: Joi.string().required(),
            altText: Joi.string().allow("")
        }),
        featured: Joi.boolean(),
        status: Joi.string().valid("active", "inactive")
    }).min(1)
};

const getCollection = {
    params: Joi.object().keys({
        id: Joi.string().required() // Can be ID or slug
    })
};

const deleteCollection = {
    params: Joi.object().keys({
        id: Joi.string().required().pattern(/^[0-9a-fA-F]{24}$/)
    })
};

export default {
    createCollection,
    updateCollection,
    getCollection,
    deleteCollection
};
