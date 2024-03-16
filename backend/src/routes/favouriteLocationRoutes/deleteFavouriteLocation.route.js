import express from "express";
import { deleteFavouriteLocationController } from "../../controllers/favouritelocations.controller.js";

const router = express.Router();
router.route("/:userId/favourite-locations/:locationId")
    .delete(deleteFavouriteLocationController);

export { router as deleteFavouriteLocationRouter };