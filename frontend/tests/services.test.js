import axios from "axios";

import { getWeatherDataService } from "../src/services/weatherdata.service";
import { register, login } from "../src/services/auth.service";

import testWeatherData from "./data/testWeatherData.json";
import { describe, expect } from "vitest";

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
    //Define a user object for use in tests
    const user = {
        username: "testUser",
        password: "1998" // Wrap the password value in quotes to ensure it is treated as a string
    };

    const incorrectUserPassword = {
        username: "testUser",
        password: "1999"
    };

    const shortUserPassword = {
        username: "testUser",
        password: "1"
    };

    it("1 - should actually make the POST request to the /register endpoint with the right data", async () => {
        //Arrange
        axios.post.mockResolvedValueOnce({ data: { user }});
        //Act
        await register(user.username, user.password);
        //Assert
        expect(axios.post).toHaveBeenCalledWith("http://localhost:4000/user/register", user);
    });

    it("2 - should have successful request to the /register endpoint", async () => {
        //Arrange
        axios.post.mockResolvedValueOnce({ data: { user }});
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
        axios.post.mockRejectedValueOnce({data: { shortUserPassword }});
        //Act
        const response = await register(user.username, user.password);
        //Assert
        expect(response.message).toBe("Registration failed");
    });

    it("4 - should actually make the POST request to the /login endpoint with the right data", async () => {
        //Arrange
        axios.post.mockResolvedValueOnce({ data: { user } });
        //Act
        await login(user.username, user.password);
        //Assert
        expect(axios.post).toHaveBeenCalledWith("http://localhost:4000/user/login", user);
    });

    it("5 - should have successful request to the /login endpoint", async () => {
        //Arrange
        axios.post.mockResolvedValueOnce({ data: { user } });
        //Act
        const response = await login(user.username, user.password);
        //Assert
        expect(response).toEqual({ user });
    });

    it("6 - should have an unsuccesful request to the /login endpoint returning An error occurred during login", async () => {
        //Arrange
        const expectedMessage = "An error occurred during login";
        axios.post.mockRejectedValueOnce(new Error());
        //Act
        const response = await login(user.username, user.password);
        //Assert
        expect(response.message).toBe(expectedMessage);
    });

    it("7 - should have an unsuccessful request to the /login endpoint returning This user couldn't be found when incorrect user password is sent", async () => {
        //Arrange
        const expectedMessage = "An error occurred during login";
        axios.post.mockRejectedValueOnce({ data: { incorrectUserPassword}});
        //Act
        const response = await login(user.username, user.password);
        //Assert
        expect(response.message).toBe(expectedMessage);
    });

    it("8 - should have an unsuccessful request to the /login endpoint returning This user couldn't be found when a short user password is sent", async () => {
        //Arrange
        const expectedMessage = "An error occurred during login";
        axios.post.mockRejectedValueOnce({ data: { shortUserPassword }});
        //Act
        const response = await login(user.username, user.password);
        //Assert
        expect(response.message).toBe(expectedMessage);
    });

});



