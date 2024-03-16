import express from "express";
import { getAllFavouriteLocationsController } from "../../controllers/favouritelocations.controller.js";

const router = express.Router();
router.route("/:userId/favourite-locations")
    .get(getAllFavouriteLocationsController);

export { router as allFavouriteLocationsRouter };
