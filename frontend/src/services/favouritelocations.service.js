import axios from "axios";

const API_URL = "http://localhost:4000/user"

export const fetchFavouriteLocations = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/${userId}/favourite-locations`);
        return response.data;
    } catch (error) {
        return error.message;
    }
}

export const addFavouriteLocation = async (userId, location) => {
    try {
        const response = await axios.post(`${API_URL}/${userId}/favourite-locations/add`, { location });
        return response.data;
    } catch (error) {
        return error.message;
    }
}

export const deleteFavouriteLocation = async (userId, locationId) => {
    try {
        const response = await axios.delete(`${API_URL}/${userId}/favourite-locations/${locationId}`);
        return response.data;
    } catch (error) {
        return error.message;
    }
}