import { render } from "@testing-library/react";
import WeatherCard from "../src/components/WeatherCard";


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
});
