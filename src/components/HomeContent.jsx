import { useState } from "react";
import WeatherCard from "./WeatherCard";
import "./HomeContent.css";
import WeatherContent from "./WeatherContent";
import dataUnavailableImg from "../assets/images/data-unavailable-image.jpg";

const HomeContent = ({
  weatherData,
  countryName,
  errorMessage,
  setSearchBarText,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault(); // prevent default form submission
    setSubmitted(true);
    setSearchBarText(searchInput); // set searchBarText to the value of searchBarText
  };

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

  if (!submitted) {
    return (
      <div className={`background-image ${submitted ? "hidden" : ""}`}>
        <div className="background-overlay"></div>
        <h1 className="text-white position-relative mb-lg-3">
          Tell me about ...
        </h1>
        <form
          onSubmit={submitHandler}
          className="form-inline my-2 d-flex justify-content-center align-items-center flex-column my-lg-0"
        >
          <input
            className="form-control mr-sm-2 position-relative"
            type="search"
            name="search"
            placeholder="Location name..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            aria-label="Search"
          />
          <button
            className="btn btn-success my-3 position-relative w-50"
            type="submit"
            disabled={!searchInput} // disable button if searchBarText is empty
          >
            Search
          </button>
        </form>
      </div>
    );
  }

  // Initialize currentDay variable

  let currentDay; // Initialize currentDay variable

  if (weatherData !== null) { // if weatherData is not null
    if (weatherData && weatherData.length > 0) { // if weatherData is not null and weatherData length is greater than 0
      currentDay = weatherData[0];
    }
  }

  if (!currentDay) {
    return <div>No weather available</div>;
  }

  const { date, icon, temp, weather_desc } = currentDay; // destructure date, icon, temp and weather_desc from currentDay

  return (
    <div id="weather-container">
      {/* <div className="weather-container-overlay"></div> */}
      {submitted && ( // if submitted is true then return WeatherContent component
        <WeatherContent
          date={date}
          icon={icon}
          temp={temp}
          weather_desc={weather_desc}
          countryName={countryName}
        />
      )}
      {submitted && ( // if submitted is true then return WeatherCard component
        <div className="row row-cols-2 row-cols-sm-4">
          {weatherData.slice(1).map((day) => (
            <WeatherCard {...day} key={new Date(day.date).getDay()} />
          ))}
        </div>
      )}
    </div>
  );
};
export default HomeContent;
