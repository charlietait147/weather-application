import { registerUserService, loginUserService, updatePasswordService } from "../services/user.services.js";

export const registerUserController = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await registerUserService(username, password);
        res.status(201).json(`${username} has been registered`);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export const loginUserController = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await loginUserService(username, password);
        res.status(200).json(`${username} has logged in`);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export const updatePasswordController = async (req, res) => {
    try {
        const user = await updatePasswordService(req.body.newPassword, req.params._id);
        res.status(200).json(`${user.username} has updated their password`);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

