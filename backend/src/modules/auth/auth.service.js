import User from "../user/user.model.js";
import { ApiError } from "../../utils/ApiError.js";

export const register = async (userData) => {
    const { email } = userData;
    const existedUser = await User.findOne({ email });
    if (existedUser) {
        throw new ApiError(409, "User with this email already exists");
    }
    const user = await User.create(userData);
    const createdUser = await User.findById(user._id).select("-password");
    
    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user");
    }

    return createdUser;
};

export const login = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new ApiError(404, "User does not exist");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid user credentials");
    }

    const accessToken = user.generateAccessToken();
    const loggedInUser = await User.findById(user._id).select("-password");

    return { user: loggedInUser, accessToken };
};

export const logout = async () => {
    // In a stateless JWT implementation, logout is usually handled by the client by deleting the token.
    // If using cookies, we would clear the cookie here.
    return { message: "User logged out successfully" };
};