import axios from "axios";

const API_URL = "http://localhost:4000/user"

export const register = async (username, password) => {
    try {
        const res = await axios.post(`${API_URL}/register`, { username, password });

        const data = await res.data;

        return data;
    }
    catch (error) {
        return error.message ? error : new Error("Registration failed");
    }
}

export const login = async (username, password) => {
    try {
        const res = await axios.post(`${API_URL}/login`, { username, password });

        const data = await res.data;

        if (res.status === 201) {
            localStorage.setItem("user", JSON.stringify(data));
            return data;
        }

        return data;
    }
    catch (error) {
        if (error.response && error.response.status === 400) {
           return error.message ? error: new Error("This user couldn't be found");// Throw the specific error message
        } else {
            return error.message ? error: new Error("An error occurred during login"); // Throw a generic error message
        }
    }
}

// Additional edge cases to test:

// 1. Empty username and password
// Test if the registration and login functions handle empty username and password inputs correctly.

// 2. Invalid username and password
// Test if the registration and login functions handle invalid username and password inputs correctly.

// 3. Network error
// Test if the registration and login functions handle network errors correctly.

// 4. Server error
// Test if the registration and login functions handle server errors correctly.

// 5. Successful registration and login
// Test if the registration and login functions work correctly when valid inputs are provided.

// 6. Duplicate registration
// Test if the registration function handles duplicate registration correctly.

// 7. Successful login with incorrect password
// Test if the login function handles incorrect passwords correctly.

// 8. Successful login with incorrect username
// Test if the login function handles incorrect usernames correctly.

// 9. Successful login with correct username and password
// Test if the login function works correctly when valid username and password are provided.