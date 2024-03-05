import WeatherContent from "./WeatherContent";
import WeatherCard from "./WeatherCard";
import { useEffect, useState } from "react";
import { getWeatherDataService } from "../services/weatherdata.service";
import { updateState } from "../utils/WeatherDataHelper";
import { useParams } from "react-router-dom";
import "./WeatherPage.css";
import dataUnavailableImg from "../assets/images/data-unavailable-image.jpg";

const WeatherPage = () => {
  const { id } = useParams();
  const [weatherData, setWeatherData] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const fetchWeatherData = async () => {
    try {
      const response = await getWeatherDataService(id);
      if (response && response.city && response.city.name) {
        setCountryName(response.city.name);
      }
      const updatedDays = updateState(response);
      setWeatherData(updatedDays);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Data unavailable for this location");
      setCountryName("");
      setWeatherData([]);
    }
  };
  useEffect(() => {
    fetchWeatherData();
  }, [id]);

  if (errorMessage) {
    return (
      <div className="container py-4 vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className="pb-3">{errorMessage}</h1>
        <img
          src={dataUnavailableImg}
          alt="Data unavailable"
          className="img-thumbnail"
          style={{ width: 400, height: 400 }}
        />
      </div>
    ); // if errorMessage is true then return the error message
  }

  let currentDay; // Initialize currentDay variable

  if (weatherData !== null) {
    // if weatherData is not null
    if (weatherData && weatherData.length > 0) {
      // if weatherData is not null and weatherData length is greater than 0
      currentDay = weatherData[0];
    }
  }

  if (!currentDay) {
    return <div>Loading...</div>;
  }

  const { date, icon, temp, weather_desc } = currentDay; // destructure date, icon, temp and weather_desc from currentDay

  console.log(currentDay);

  return (
    <div id="weather-container">
      <WeatherContent
        date={date}
        icon={icon}
        temp={temp}
        weather_desc={weather_desc}
        countryName={countryName}
      />
      <div className="row row-cols-2 row-cols-sm-4">
        {weatherData.slice(1).map((day) => (
          <WeatherCard {...day} key={new Date(day.date).getDay()} />
        ))}
      </div>
    </div>
  );
};

export default WeatherPage;
