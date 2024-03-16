import express from "express";
import { addFavouriteLocationController } from "../../controllers/favouritelocations.controller.js";

const router = express.Router();
router.route("/:userId/favourite-locations/add")
    .post(addFavouriteLocationController);

export { router as addFavouriteLocationRouter };
