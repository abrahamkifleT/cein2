import { ApiError } from "../utils/ApiError.js";

/**
 * Middleware to validate request data against a Joi schema
 * @param {Object} schema - Joi schema object containing body, query, and params keys
 * @returns {Function} - Express middleware function
 */
export const validate = (schema) => (req, res, next) => {
    const validSchema = {};
    const object = {};

    // Extract relevant parts of the request to validate
    ["params", "query", "body"].forEach((key) => {
        if (schema[key]) {
            validSchema[key] = schema[key];
            object[key] = req[key];
        }
    });

    // Validate each part
    Object.keys(validSchema).forEach((key) => {
        const { value, error } = validSchema[key].validate(object[key], {
            abortEarly: false,
            allowUnknown: true,
            stripUnknown: true,
        });

        if (error) {
            const errorMessage = error.details
                .map((details) => details.message)
                .join(", ");
            return next(new ApiError(400, errorMessage));
        }
        
        // Update request with validated and stripped data
        req[key] = value;
    });

    return next();
};
