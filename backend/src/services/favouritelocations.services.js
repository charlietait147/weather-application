import User from "../models/user.model.js";

export const getAllFavouriteLocationsService = async (userId) => {
    try {
        const ObjectId = userId.toString(); // Convert the user ID to an ObjectId
        const user = await User.findById(ObjectId); // Find the user by ID

        if (!user) {
            throw new Error('Invalid user ID');
        }

        return user.favouriteLocations; // Return the user's favorite locations

    } catch (error) {
        throw new Error(error.message);
    }
}

export const addFavouriteLocationService = async (location, userId) => {
    try {

        const ObjectId = userId.toString();
        const user = await User.findById(ObjectId);

        console.log(user);

        if (!user) {
            throw new Error('Invalid user ID');
        }

        // Add the new location to user's favoriteLocations array
        user.favouriteLocations.push({ location });

        // Save the updated user object
        await user.save();

        return user.favouriteLocations; // Return updated favorite locations
    } catch (error) {
        throw new Error(error.message);
    }
}

export const deleteFavouriteLocationService = async (userId, locationId) => {
    try {
        const UserObjectId = userId.toString(); // Convert the user ID to an ObjectId
        const user = await User.findById(UserObjectId); // Find the user by ID

        console.log(user);

        const LocationObjectId = locationId.toString(); // Convert the location ID to an ObjectId


        if (!user) {
            throw new Error('Invalid user ID');
        }

        const index = user.favouriteLocations.findIndex(loc => loc.id === LocationObjectId); 
        // Find the index of the location in the user's favouriteLocations array

        if (index === -1) {
            throw new Error('Favourite location not found');
        } // If the location is not found, throw an error

        user.favouriteLocations.splice(index, 1); // Remove the location from the user's favouriteLocations array
        await user.save();
        return user.favouriteLocations;
    } catch (error) {
        throw new Error(error.message);
    }
}

