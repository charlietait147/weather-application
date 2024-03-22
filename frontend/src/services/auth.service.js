import axios from "axios";

const API_URL = "http://localhost:4000/user"

export const register = async (username, password) => {
    try {
        const res = await axios.post(`${API_URL}/register`, { username, password });

        const data = await res.data;

        if (res.status === 201) {
            return data;
        }
        else {
            throw new Error(data.error);
        }
    }
    catch (error) {
        return { error: error.response.data.message } || "Registration failed";
    }
}

export const login = async (username, password) => {
    try {
        const res = await axios.post(`${API_URL}/login`, { username, password });

        const data = await res.data;

        return data;
    }
    catch (error) {
        if (error.response && error.response.status === 400) {
            throw new Error("This user couldn't be found"); // Throw the specific error message
        } else {
            throw new Error("An error occurred during login"); // Throw a generic error message
        }
    }
}