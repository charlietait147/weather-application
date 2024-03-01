import PropTypes from "prop-types";
const WeatherCard = ({ date, icon, temp, weather_desc }) => {
  return (
    <div className="d-flex flex-column align-items-center py-4">
      <p className="text-center">{date}</p>
      <img src={`/assets/weather-icons/${icon}.svg`} alt="Weather Icon"></img>
      <p>{temp}</p>
      <p>{weather_desc}</p>
    </div>
  );
};

WeatherCard.propTypes = {
  date: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  weather_desc: PropTypes.string.isRequired,
};

export default WeatherCard;
