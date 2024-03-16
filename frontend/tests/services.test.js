import axios from "axios";

import { getWeatherDataService } from "../src/services/weatherdata.service";

import testWeatherData from "./data/testWeatherData.json";
import { describe } from "vitest";

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

