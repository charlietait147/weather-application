import express from "express";
import { addFavouriteLocationController } from "../../controllers/favouritelocations.controller.js";
import { newFavouriteLocationValidation } from "../../middleware/favouritelocation.validation.js";

const router = express.Router();
router.route("/:userId/favourite-locations/add")
    .post(newFavouriteLocationValidation, addFavouriteLocationController);

export { router as addFavouriteLocationRouter };
