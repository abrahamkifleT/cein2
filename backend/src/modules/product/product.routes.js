import { Router } from "express";
import { 
    createProductController, 
    getAllProductsController, 
    getProductByIdController, 
    updateProductController, 
    deleteProductController 
} from "./product.controller.js";
import { verifyJWT } from "../../middleware/auth.middleware.js";
import { restrictTo } from "../../middleware/role.middleware.js";
import { validate } from "../../middleware/validate.middleware.js";
import productValidation from "./product.validation.js";

const router = Router();

router.route("/")
    .get(getAllProductsController)
    .post(
        verifyJWT, 
        restrictTo("admin"), 
        validate(productValidation.createProduct), 
        createProductController
    );

router.route("/:id")
    .get(
        validate(productValidation.getProduct), 
        getProductByIdController
    )
    .put(
        verifyJWT, 
        restrictTo("admin"), 
        validate(productValidation.updateProduct), 
        updateProductController
    )
    .delete(
        verifyJWT, 
        restrictTo("admin"), 
        validate(productValidation.deleteProduct), 
        deleteProductController
    );

export default router;