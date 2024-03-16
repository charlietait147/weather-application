import express from "express";
import { registerUserController } from "../../controllers/user.controller.js";

const router = express.Router();

router.route("/register")
    .post(registerUserController);

export { router as registerUserRouter };