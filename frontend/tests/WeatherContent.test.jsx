import { render, screen, waitFor } from "@testing-library/react";
import WeatherContent from "../src/components/WeatherContent";
import { expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("WeatherContentTests", () => {
  describe("WeatherData tests", () => {
    it("should display the country name", async () => {
      //Testing to see if the country name is displayed when I search Dublin in the search bar
      //Arrange
      //1. Set some test data - testCountryName
      const testCountryName = "Dublin";

      //2. Render the component pass in the testData
      render(<WeatherContent countryName={testCountryName} />);

      //Act
      //3. Check that the country name is displayed
      await waitFor(() => {
        expect(screen.getByText(testCountryName)).toBeInTheDocument();
      });
    });
    it("should display the country current date, current icon, current temp and current weather description", async () => {
      //Testing to see if the current date, icon, temp, weather description is displayed when I search Dublin in the search bar
      //Arrange
      //1. Set some test data - testDate, testIcon, testTemp, testWeatherDesc
      const testDate = "2021-09-01 12:00:00";
      const testIcon = "04d";
      const testTemp = 25;
      const testWeatherDesc = "Cloudy";

      //2. Render the component pass in the testData
      render(
        <WeatherContent
          date={testDate}
          icon={testIcon}
          temp={testTemp}
          weather_desc={testWeatherDesc}
        />
      );

      //Act
      //3. Check that the date, icon, temp and weather_desc are displayed
      await waitFor(() => {
        expect(screen.getByText(testDate)).toBeInTheDocument();
        expect(screen.getByAltText("Weather Icon")).toBeInTheDocument();
        expect(screen.getByText(testTemp.toString())).toBeInTheDocument();
        expect(screen.getByText(testWeatherDesc)).toBeInTheDocument();
      });
    });
  });
  // describe("LocalStorage tests", () => {
  //   // it("should add the current location to the favourites in local storage", async () => {
  //   //   //Arrange;
  //   //   const mockLocalStorage = vi.spyOn(window.localStorage.__proto__, "setItem");
  //   //   render(<WeatherContent />);
  //   //   //Act
  //   //   const bookmarkIcon = screen.getByAltText("bookmark icon");
  //   //   await userEvent.click(bookmarkIcon);

  //   //   //Assert
  //   //   expect(mockLocalStorage).toHaveBeenCalled();
  //   // });
  //   it("should display added to favourites when the bookmark icon is clicked", async () => {
  //     //Arrange;
  //     render(<WeatherContent />);
  //     const bookmarkIcon = screen.getByAltText("bookmark icon");
  //     console.log(bookmarkIcon);
  //     //Act
  //     await userEvent.click(bookmarkIcon);

  //     //Assert
  //     expect(screen.getByText("Added to favourites")).toBeInTheDocument();
  //   });

  describe("clickHandler tests", () => {
    it("should call addFavouriteLocation and display 'Added to favourites' when clicked", async () => {
      // Arrange
      // const addFavouriteLocation = vi.fn(); // Mock the addFavouriteLocation function
      const userId = "user123";
      const countryName = "Dublin";
      render(
        <WeatherContent
          userId={userId}
          countryName={countryName}
          // addFavouriteLocation={addFavouriteLocation}
        />
      );
      const bookmarkIcon = screen.getByAltText("bookmark icon");

      // Act
      await userEvent.click(bookmarkIcon);

      // Assert
      // expect(addFavouriteLocation).toHaveBeenCalledWith(userId, countryName);
      expect(screen.getByText("Added to favourites")).toBeInTheDocument();
    });
  });
});

// describe("isClicked tests", () => {
//   it("the text should display added to favourites when the bookmark icon is clicked", async () => {
//     //Arrange;
//     render(<WeatherContent />);
//     const bookmarkIcon = screen.getByAltText("bookmark icon");
//     //Act
//     await userEvent.click(bookmarkIcon);

//     //Assert
//     expect(screen.getByText("Added to Favourites")).toBeInTheDocument();
//   });
// });
// });
