import axios from "axios";

import { getWeatherDataService } from "../src/services/weatherdata.service";
import { register, login } from "../src/services/auth.service";

import { fetchFavouriteLocations, addFavouriteLocation, deleteFavouriteLocation } from "../src/services/favouritelocations.service";

import testWeatherData from "./data/testWeatherData.json";
import { describe, expect } from "vitest";

import { user, shortUserPassword, incorrectUserPassword, mockGetLocationResponse, mockAddedLocationResponse, mockDeletedLocationResponse } from "./data/testUserData";

vi.mock("axios");

const searchBarText = "Dublin";

describe("WeatherDataServiceTests", () => {
    describe("GET request to /dublin endpoint", () => {
        it('should make the external data call', async () => {
            //Arrange
            //When you come across the axios.get call in the function under test, use this function to get the resolved data
            axios.get.mockResolvedValueOnce(testWeatherData);
            //Act
            await getWeatherDataService(searchBarText);
            //Assert
            expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/dublin");
        })
    })
})
describe("AuthServiceTests", () => {
    describe("register service tests", () => {
        //Define a user object for use in tests
       
        it("1 - should actually make the POST request to the /register endpoint with the right data", async () => {
            //Arrange
            axios.post.mockResolvedValueOnce({ data: { user } });
            //Act
            await register(user.username, user.password);
            //Assert
            expect(axios.post).toHaveBeenCalledWith("http://localhost:4000/user/register", user);
        });

        it("2 - should have successful request to the /register endpoint", async () => {
            //Arrange
            axios.post.mockResolvedValueOnce({ data: { user } });
            //Act
            const response = await register(user.username, user.password);
            //Assert
            expect(response).toEqual({ user });
        });

        it("3 - should have an unsuccesful request to the /register endpoint returning Username already exists", async () => {
            //Arrange
            const expectedMessage = "Registration failed";
            axios.post.mockRejectedValueOnce(new Error());
            //Act
            const response = await register(user.username, user.password);
            //Assert
            expect(response.message).toBe(expectedMessage);
        }
        );

        it("4 - should have an unsuccessful request to the /register endpoint returning Registration failed when short username is entered", async () => {
            //Arrange
            axios.post.mockRejectedValueOnce({ data: { shortUserPassword } });
            //Act
            const response = await register(user.username, user.password);
            //Assert
            expect(response.message).toBe("Registration failed");
        });
    });

    describe("login service tests", () => {
        it("5 - should actually make the POST request to the /login endpoint with the right data", async () => {
            //Arrange
            axios.post.mockResolvedValueOnce({ data: { user } });
            //Act
            await login(user.username, user.password);
            //Assert
            expect(axios.post).toHaveBeenCalledWith("http://localhost:4000/user/login", user);
        });

        it("6 - should have successful request to the /login endpoint", async () => {
            //Arrange
            axios.post.mockResolvedValueOnce({ data: { user } });
            //Act
            const response = await login(user.username, user.password);
            //Assert
            expect(response).toEqual({ user });
        });

        it("7 - should have an unsuccesful request to the /login endpoint returning An error occurred during login", async () => {
            //Arrange
            const expectedMessage = "An error occurred during login";
            axios.post.mockRejectedValueOnce(new Error());
            //Act
            const response = await login(user.username, user.password);
            //Assert
            expect(response.message).toBe(expectedMessage);
        });

        it("8 - should have an unsuccessful request to the /login endpoint returning This user couldn't be found when incorrect user password is sent", async () => {
            //Arrange
            const expectedMessage = "An error occurred during login";
            axios.post.mockRejectedValueOnce({ data: { incorrectUserPassword } });
            //Act
            const response = await login(user.username, user.password);
            //Assert
            expect(response.message).toBe(expectedMessage);
        });

        it("9 - should have an unsuccessful request to the /login endpoint returning This user couldn't be found when a short user password is sent", async () => {
            //Arrange
            const expectedMessage = "An error occurred during login";
            axios.post.mockRejectedValueOnce({ data: { shortUserPassword } });
            //Act
            const response = await login(user.username, user.password);
            //Assert
            expect(response.message).toBe(expectedMessage);
        });

    });

});

//Favourite location tests:

//1. Mock the user Id to use for the favourite-location endpoint.

describe("FavouriteLocationServiceTests", () => {
    describe("getFavouriteLocation service tests", () => {
        it("should actually make the GET request to the /favourite-location endpoint with the right data", async () => {
            //Arrange
            const userId = "65fc7e01e6c9b8b59eff3258";
            
            //Act
            axios.get.mockResolvedValueOnce({ data: mockGetLocationResponse });
            const result = await fetchFavouriteLocations(userId);

            //Assert
            expect(axios.get).toHaveBeenCalledWith(`http://localhost:4000/user/${userId}/favourite-locations`);
            expect(result).toEqual(mockGetLocationResponse);
        });
    });
    it("should handle errors when fetching favourite locations", async () => {
        //Arrange
        const userId = "65fc7e02e6c9b8b59eff3253";
        const expectedMessage = "Failed to get favourite locations";
        axios.get.mockRejectedValueOnce(new Error(expectedMessage));
        //Act
        const result = await fetchFavouriteLocations(userId);
        //Assert
        expect(result).toBe(expectedMessage);
    });

    describe("addFavouriteLocation service tests", () => {
        it("should actually make the POST request to the /favourite-location endpoint with the right data", async () => {
            //Arrange
            const userId = "65fc7e01e6c7b8b59eff3259";
            const location = "Berlin";
            //Act
            axios.post.mockResolvedValueOnce({ data: mockAddedLocationResponse });
            const result = await addFavouriteLocation(userId, location);
            //Assert
            expect(axios.post).toHaveBeenCalledWith(`http://localhost:4000/user/${userId}/favourite-locations/add`, { location });
            expect(result).toEqual(mockAddedLocationResponse);
            
        });
    });
    it("should handle errors when adding a favourite location", async () => {
        //Arrange
        const userId = "65fc7e04e6c9b8b59eff3255";
        const location = "Berlin";
        const expectedMessage = "Failed to add favourite location";
        axios.post.mockRejectedValueOnce(new Error(expectedMessage));
        //Act
        const result = await addFavouriteLocation(userId, location);
        //Assert
        expect(result).toBe(expectedMessage);
    });

    describe("deleteFavouriteLocation service tests", () => {
        it("should actually make the DELETE request to the /favourite-location endpoint with the right data", async () => {
            //Arrange
            const userId = "28384328832";
            const locationId =  "65f6df0e81fefcc6727711d7"
            //Act
            axios.delete.mockResolvedValueOnce({ data: mockDeletedLocationResponse });
            const result = await deleteFavouriteLocation(userId, locationId);
            //Assert
            expect(axios.delete).toHaveBeenCalledWith(`http://localhost:4000/user/${userId}/favourite-locations/${locationId}`);
            expect(result).toEqual(mockDeletedLocationResponse);

        });
        
    });
    it("should handle errors when deleting a favourite location", async () => {
        //Arrange
        const userId = "28384328832";
        const locationId = "65f6df2e81fefcc6927711d6";
        const expectedMessage = "Failed to delete favourite location";
        axios.delete.mockRejectedValueOnce(new Error(expectedMessage));
        //Act
        const result = await deleteFavouriteLocation(userId, locationId);
        //Assert
        expect(result).toBe(expectedMessage);
    });
});
    



