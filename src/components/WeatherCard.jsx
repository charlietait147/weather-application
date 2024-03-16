import PropTypes from "prop-types";

const WeatherCard = ({ date, icon, temp, weather_desc }) => {
  return (
    <div className="d-flex flex-column align-items-center py-4">
      {typeof date === "string" && <p className="text-center">{date}</p>}
      {typeof icon === "string" && <img src={`/assets/weather-icons/${icon}.svg`} alt="Weather Icon" />}
      {typeof temp === "number" && <p>{temp}</p>}
      {typeof weather_desc === "string" && <p>{weather_desc}</p>}
    </div>
  );
};

WeatherCard.propTypes = {
  date: PropTypes.string,
  icon: PropTypes.string,
  temp: PropTypes.number,
  weather_desc: PropTypes.string,
};

export default WeatherCard;
