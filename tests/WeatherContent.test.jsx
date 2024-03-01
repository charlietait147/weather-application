import { render, screen, waitFor } from "@testing-library/react";
import WeatherContent from "../src/components/WeatherContent";

describe("WeatherContentTests", () => {
  describe("WeatherData tests", () => {
    it("should display the country name", async () => {
      //Testing to see if the country name is displayed when I search Dublin in the search bar
      //Arrange
      //1. Set some test data - testCountryName
      const testCountryName = "Dublin";

      //2. Render the component pass in the testData
      render(
        <WeatherContent
          countryName={testCountryName}
        />
      );

      //Act
      //3. Check that the country name is displayed
      await waitFor(() => {
        expect(screen.getByText(testCountryName)).toBeInTheDocument();
      });
    });
    it("should display the country current date and time", async () => {
      //Testing to see if the country name is displayed when I search Dublin in the search bar
      //Arrange
      //1. Set some test data - testCountryName
      const testDate = "2021-09-01 12:00:00";

      //2. Render the component pass in the testData
      render(
        <WeatherContent
          date={testDate}
        />
      );

      //Act
      //3. Check that the country name is displayed
      await waitFor(() => {
        expect(screen.getByText(testDate)).toBeInTheDocument();
      });
    });
  });
});
