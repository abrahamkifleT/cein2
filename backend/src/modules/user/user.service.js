import User from "./user.model.js";
import { ApiError } from "../../utils/ApiError.js";

export const createUser = async (userData) => {
    const existedUser = await User.findOne({ email: userData.email });
    if (existedUser) {
        throw new ApiError(409, "User with this email already exists");
    }
    return await User.create(userData);
};

export const getAllUsers = async () => {
    return await User.find().select("-password");
};

export const getUserById = async (id) => {
    const user = await User.findById(id).select("-password");
    if (!user) {
        throw new ApiError(404, "User not found");
    }
    return user;
};

export const updateUser = async (id, updateData) => {
    const user = await User.findByIdAndUpdate(
        id,
        { $set: updateData },
        { new: true, runValidators: true }
    ).select("-password");

    if (!user) {
        throw new ApiError(404, "User not found");
    }
    return user;
};

export const deleteUser = async (id) => {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
        throw new ApiError(404, "User not found");
    }
    return user;
};