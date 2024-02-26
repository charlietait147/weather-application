import { useState } from "react";
import WeatherCard from "./WeatherCard";
import "./HomeContent.css";
import WeatherContent from "./WeatherContent";
const HomeContent = ({ days, searchBarText, setSearchBarText }) => {
  const [submitted, setSubmitted] = useState(false);

  if (days.length === 0) { // if days is an empty array then return Loading ...
    return <div>Loading...</div>;
  }
  const currentDay = days[0]; //set currentDay to first element in array

  if (!currentDay) {
    return <div>No weather available</div>; // if currentDay is undefined then return No weather available
  }

  const { date, icon, temp, weather_desc } = currentDay; // destructure date, icon, temp and weather_desc from currentDay

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
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
            value={searchBarText}
            onChange={(e) => setSearchBarText(e.target.value)}
            aria-label="Search"
          />
          <button
            className="btn btn-success my-3 position-relative w-50"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      {submitted && <div className="weather-container">
        {/* <div className="weather-container-overlay"></div> */}
        {submitted && ( // if submitted is true then return WeatherContent component
          <WeatherContent
            date={date}
            icon={icon}
            temp={temp}
            weather_desc={weather_desc}
          />
        )}
        {submitted && ( // if submitted is true then return WeatherCard component
          <div className="row row-cols-2 row-cols-sm-4">
            {days.slice(1).map((day) => (
              <WeatherCard {...day} key={new Date(day.date).getDay()} />
            ))}
          </div>
        )}
      </div> }
    </>
  );
};
export default HomeContent;



