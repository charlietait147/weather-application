import PropTypes from "prop-types";
import bookmarkIcon from "../assets/icons/bookmark.svg";
import "./WeatherContent.css";

const WeatherContent = ({ date, icon, temp, weather_desc, countryName }) => {
  return (
    <div className="container pt-4 px-4">
      <h1 className="text-center">Telling you about...</h1>
      <h1 className="text-center">{countryName}</h1>
      <div className="d-flex justify-content-center">
        <img src={bookmarkIcon} alt="bookmark icon" />
        <p className="px-1 mb-0">Click to add to favourites</p>
      </div>
      <h4 className="pt-5 text-sm-center">Todays Weather:</h4>
      <p className="text-sm-center">{date}</p>
      <div className="large-container">
        <img className="mb-4" src={`/assets/weather-icons/${icon}.svg`}></img>
        <div className="small-container">
          <p className="pe-sm-3">{temp}</p>
          <p>{weather_desc}</p>
        </div>
      </div>
    </div>
  );
};

WeatherContent.propTypes = {
  date: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  weather_desc: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
};

export default WeatherContent;
