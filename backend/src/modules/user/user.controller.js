import * as userService from "./user.service.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { ApiError } from "../../utils/ApiError.js";

export const createUserController = asyncHandler(async (req, res) => {
    const user = await userService.createUser(req.body);
    return res.status(201).json(new ApiResponse(201, user, "User created successfully"));
});

export const getAllUsersController = asyncHandler(async (req, res) => {
    const users = await userService.getAllUsers();
    return res.status(200).json(new ApiResponse(200, users, "Users fetched successfully"));
});

export const getUserByIdController = asyncHandler(async (req, res) => {
    const user = await userService.getUserById(req.params.id);
    return res.status(200).json(new ApiResponse(200, user, "User fetched successfully"));
});

export const updateUserController = asyncHandler(async (req, res) => {
    const user = await userService.updateUser(req.params.id, req.body);
    return res.status(200).json(new ApiResponse(200, user, "User updated successfully"));
});

export const deleteUserController = asyncHandler(async (req, res) => {
    await userService.deleteUser(req.params.id);
    return res.status(200).json(new ApiResponse(200, null, "User deleted successfully"));
});

export const getProfileController = asyncHandler(async (req, res) => {
    return res.status(200).json(new ApiResponse(200, req.user, "User profile fetched successfully"));
});