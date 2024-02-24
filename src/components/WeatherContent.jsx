const WeatherContent = ({weatherCurrentDay}) => {
    const {date, icon, temp, weather_desc} = weatherCurrentDay;
    
  return (
    <div>{date}
    {icon}
    {temp}
    {weather_desc}
    </div>
  )
}

export default WeatherContent