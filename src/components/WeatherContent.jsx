import PropTypes from "prop-types";
const WeatherContent = ({date, icon, temp, weather_desc}) => {
    
  return (
    <div>{date}
    {icon}
    {temp}
    {weather_desc}
    </div>
  )
}

WeatherContent.propTypes = {
    date: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    weather_desc: PropTypes.string.isRequired
}

export default WeatherContent