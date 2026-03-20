import * as authService from "./auth.service.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

export const registerController = asyncHandler(async (req, res) => {
    const user = await authService.register(req.body);
    return res.status(201).json(new ApiResponse(201, user, "User registered successfully"));
});

export const loginController = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const { user, accessToken } = await authService.login(email, password);

    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
    };

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .json(
            new ApiResponse(
                200,
                { user, accessToken },
                "User logged in successfully"
            )
        );
});

export const logoutController = asyncHandler(async (req, res) => {
    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
    };

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .json(new ApiResponse(200, {}, "User logged out successfully"));
});

