import express from "express";
import { updatePasswordController } from "../../controllers/user.controller.js";

const router = express.Router();
router.route("/:_id/update-password")
    .put(updatePasswordController);

export { router as updatePasswordRouter };
