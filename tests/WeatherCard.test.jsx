import { render } from "@testing-library/react";
import WeatherCard from "../src/components/WeatherCard";
import { expect } from "vitest";


describe("WeatherCardTests", () => {
    it("renders WeatherCard component with props", () => {
        //Arrange
        //1. Set some test data - date, icon, temp, weather_desc
        const date = "2022-01-01";
        const icon = "../src/assets/icons/01d";
        const temp = 25;
        const weather_desc = "Clear skies";

        //2. Render the component pass in the testData
        const { getByText, getByAltText } = render(
            <WeatherCard
                date={date}
                icon={icon}
                temp={temp}
                weather_desc={weather_desc}
            />
        );
        //Assert
        //3. Check that the date, 
        expect(getByText(date)).toBeInTheDocument();
        expect(getByAltText("Weather Icon")).toBeInTheDocument();
        expect(getByText(temp.toString())).toBeInTheDocument();
        expect(getByText(weather_desc)).toBeInTheDocument();
    });
    it("should not render the Weather Data in the WeatherCard component without props", () => {
        // Act
        const { queryByText, queryByAltText } = render(<WeatherCard />);
    
        // Assert
        expect(queryByText("2022-02-22")).not.toBeInTheDocument();
        expect(queryByAltText("Weather Icon")).not.toBeInTheDocument();
        expect(queryByText("25")).not.toBeInTheDocument();
        expect(queryByText("Clear Skies")).not.toBeInTheDocument();
      });
      it("should not render WeatherCard Data in the component with invalid props", () => {
        // Arrange
        const testData = {
          date: 123, // Invalid date as a number
          icon: 24.6, // Invalid icon as a number
          temp: "25", // Invalid temp as a string
          weather_desc: true, // Invalid weather_desc as a boolean
        };
      
        // Act
        const { queryByText, queryByAltText } = render(
          <WeatherCard
            date={testData.date}
            icon={testData.icon}
            temp={testData.temp}
            weather_desc={testData.weather_desc}
          />
        );
      
        // Assert
        expect(queryByText(testData.date.toString())).not.toBeInTheDocument(); // Ensure invalid date is not rendered
        expect(queryByAltText("Weather Icon")).not.toBeInTheDocument(); // Icon should still be rendered
        expect(queryByText(testData.temp.toString())).not.toBeInTheDocument(); // Temp should still be rendered
        expect(queryByText(testData.weather_desc)).not.toBeInTheDocument(); // Weather desc should still be rendered
      });
});
