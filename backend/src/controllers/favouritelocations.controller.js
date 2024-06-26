import { getAllFavouriteLocationsService, addFavouriteLocationService, deleteFavouriteLocationService } from "../services/favouritelocations.services.js";
import { validationResult } from "express-validator";

export const getAllFavouriteLocationsController = async (req, res) => {
    try {
        const favouriteLocations = await getAllFavouriteLocationsService(req.params.userId);
        // Call the service function to get all the favorite locations
        res.status(200).json(favouriteLocations);
    } catch (error) {
        res.status(400).send("Failed to get favourite locations");
    }
}

export const addFavouriteLocationController = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send("Adding favourite location failed");
        }
        const { location } = req.body; // Get the location from the request body
        // Get the user ID from the request parameters
        // Call the service function to add the new location
        const updatedFavoriteLocations = await addFavouriteLocationService(location, req.params.userId);

        res.status(201).json(updatedFavoriteLocations);
    } catch (error) {
        res.status(400).send("Adding favourite location failed" + error.message);
    }
}

export const deleteFavouriteLocationController = async (req, res) => {
    try {
        const { userId, locationId } = req.params;
        const deletedFavouriteLocation = await deleteFavouriteLocationService(userId, locationId);
        // Call the service function to delete the location with the ID from the user's location
        res.status(201).json(deletedFavouriteLocation);
    } catch (error) {
        res.status(400).send("Failed to delete favourite location");
    }
}