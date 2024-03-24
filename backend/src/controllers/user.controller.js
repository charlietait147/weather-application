import { registerUserService, loginUserService, updatePasswordService } from "../services/user.services.js";
import { validationResult } from "express-validator";

export const registerUserController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send( errors.array().map(error => error.msg));
    }
    try {
        const { username, password } = req.body;
        const user = await registerUserService(username, password);

        res.status(201).json(user);

    } catch (error) {
        res.status(400).send("Registration failed");
        console.error("Registration failed", error);
    }
}

export const loginUserController = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await loginUserService(username, password);;

        res.status(201).json(user);
    } catch (error) {
        res.status(400).send("Login failed");
        console.error("Login failed", error);

    }
}

export const updatePasswordController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send(errors.array().map(error => error.msg));
    }
    try {
        const user = await updatePasswordService(req.body.newPassword, req.params._id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).send("Password update failed");
    }
}

