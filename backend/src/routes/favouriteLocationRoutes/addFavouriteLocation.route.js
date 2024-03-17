import express from "express";
import { addFavouriteLocationController } from "../../controllers/favouritelocations.controller.js";
import { addFavouriteLocationValidation } from "../../middleware/favouritelocation.validation.js";

const router = express.Router();
router.route("/:userId/favourite-locations/add")
    .post(addFavouriteLocationValidation, addFavouriteLocationController);

export { router as addFavouriteLocationRouter };
