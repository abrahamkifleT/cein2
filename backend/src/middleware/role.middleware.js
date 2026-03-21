import { ApiError } from "../utils/ApiError.js";

/**
 * Middleware to restrict access based on user roles
 * @param {...string} roles - Allowed roles
 * @returns {Function} - Express middleware function
 */
export const restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return next(
                new ApiError(403, "You do not have permission to perform this action")
            );
        }
        next();
    };
};
