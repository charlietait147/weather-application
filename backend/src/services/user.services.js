import User from "../models/user.model.js";
import bcrypt from 'bcrypt';

export const registerUserService = async (username, password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword });
        return await newUser.save(); 
    } catch (error) {
        throw new Error(error.message);
    }
}

export const loginUserService = async (username, password) => {
    try {
        const user = await User.findOne({ username });
        if (!user) { // if user is not found
            throw new Error('User not found'); // throw an error
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        // compare the password with the hashed password

        if (!passwordMatch) { // if the password does not match
            throw new Error('Invalid password'); // throw an error
        }

        return user; //otherwise return the user
    }
    catch (error) {
        throw new Error(error.message);
    }
}

export const updatePasswordService = async (newPassword, _id) => {
    try {
        const user = await User.findById(_id); // find the user by id

        console.log(user);
        if (!user) {
            throw new Error('User not found'); // if user is not found, throw an error
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10); // hash the new password
        user.password = hashedPassword; // set the user's password to the hashed password
        await user.save(); // save the user

        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}







