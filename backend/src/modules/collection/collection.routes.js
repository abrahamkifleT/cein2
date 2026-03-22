import { Router } from "express";
import { 
    createCollectionController, 
    getAllCollectionsController, 
    getCollectionByIdOrSlugController, 
    updateCollectionController, 
    deleteCollectionController 
} from "./collection.controller.js";
import { verifyJWT } from "../../middleware/auth.middleware.js";
import { restrictTo } from "../../middleware/role.middleware.js";
import { validate } from "../../middleware/validate.middleware.js";
import collectionValidation from "./collection.validation.js";

const router = Router();

router.route("/")
    .get(getAllCollectionsController)
    .post(
        verifyJWT, 
        restrictTo("admin"), 
        validate(collectionValidation.createCollection), 
        createCollectionController
    );

router.route("/:id")
    .get(
        validate(collectionValidation.getCollection), 
        getCollectionByIdOrSlugController
    )
    .put(
        verifyJWT, 
        restrictTo("admin"), 
        validate(collectionValidation.updateCollection), 
        updateCollectionController
    )
    .delete(
        verifyJWT, 
        restrictTo("admin"), 
        validate(collectionValidation.deleteCollection), 
        deleteCollectionController
    );

export default router;
