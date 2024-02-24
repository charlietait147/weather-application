import PropTypes from "prop-types";
const WeatherCard = ({ date, icon, temp, weather_desc }) => {
  return (
    // <div className="container">
      
        <div className="d-flex flex-column align-items-center py-4">
          <p className="text-center">{date}</p>
          <img src={`/assets/weather-icons/${icon}.svg`}></img>
          <p>{temp}</p>
          <p>{weather_desc}</p>
        </div>
     
    // </div>
  );
};

WeatherCard.propTypes = {
  date: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  weather_desc: PropTypes.string.isRequired,
};

export default WeatherCard;

// col px-2 py-1 d-flex flex-column align-items-center
