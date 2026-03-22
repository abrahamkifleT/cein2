import { Router } from "express";
import { 
    createBlogController, 
    getAllBlogsController, 
    getBlogByIdOrSlugController, 
    updateBlogController, 
    deleteBlogController 
} from "./blog.controller.js";
import { verifyJWT } from "../../middleware/auth.middleware.js";
import { restrictTo } from "../../middleware/role.middleware.js";
import { validate } from "../../middleware/validate.middleware.js";
import blogValidation from "./blog.validation.js";

const router = Router();

router.route("/")
    .get(getAllBlogsController)
    .post(
        verifyJWT, 
        restrictTo("admin", "editor"), 
        validate(blogValidation.createBlog), 
        createBlogController
    );

router.route("/:id")
    .get(
        validate(blogValidation.getBlog), 
        getBlogByIdOrSlugController
    )
    .put(
        verifyJWT, 
        restrictTo("admin", "editor"), 
        validate(blogValidation.updateBlog), 
        updateBlogController
    )
    .delete(
        verifyJWT, 
        restrictTo("admin"), 
        validate(blogValidation.deleteBlog), 
        deleteBlogController
    );

export default router;
