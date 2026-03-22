import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import productRoutes from "./modules/product/product.routes.js";
import userRoutes from "./modules/user/user.routes.js";
import collectionRoutes from "./modules/collection/collection.routes.js";
import authRoutes from "./modules/auth/auth.routes.js";
import { errorMiddleware } from "./middleware/error.middleware.js";

dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(cookieParser());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/collections", collectionRoutes);
app.use("/api/auth", authRoutes);

// Error Middleware (should be last)
app.use(errorMiddleware);

export default app;