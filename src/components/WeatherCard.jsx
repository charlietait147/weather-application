const WeatherCard = ({date, icon, temp, weather_desc}) => {
  return (
    <div>
        {date}
        {icon}
        {temp}
        {weather_desc}
    </div>
  )
}

export default WeatherCard