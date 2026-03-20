import express from "express";
import { 
    createUserController, 
    getAllUsersController, 
    getUserByIdController, 
    updateUserController, 
    deleteUserController,
    getProfileController
} from "./user.controller.js";
import { verifyJWT } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", createUserController);
router.get("/profile", verifyJWT, getProfileController);

// Protected routes (Admin or high privilege usually, but for now just auth)
router.get("/", verifyJWT, getAllUsersController);
router.get("/:id", verifyJWT, getUserByIdController);
router.put("/:id", verifyJWT, updateUserController);
router.delete("/:id", verifyJWT, deleteUserController);

export default router;