import WeatherCard from "./WeatherCard";
import "./HomeContent.css";
import WeatherContent from "./WeatherContent";
const HomeContent = ({days}) => {

    //Passed down to the WeatherCard component to render the next 4 days weather
    const weatherBoxes = days.slice(1).map((day) => (
        <WeatherCard {...day} key={new Date(day.date).getDay()} />
      ));

    //Passed down to the WeatherContent component to render the current day weather
    const weatherCurrentDay = days[0];

  return (
    <div className="background-image">
      <div className="background-overlay"></div>
      <h1 className="text-white position-relative mb-lg-3">Tell me about ...</h1>
      <form className="form-inline my-2 d-flex justify-content-center align-items-center flex-column my-lg-0">
        <input
          className="form-control mr-sm-2 position-relative"
          type="search"
          placeholder="Location name..."
          aria-label="Search"
        />
        <button
          className="btn btn-success my-3 position-relative w-50"
          type="submit"
        >
          Search
        </button>
      </form>
      <div className="weather-container">
        <WeatherContent weatherCurrentDay={weatherCurrentDay} />
        {weatherBoxes}
      </div>
    </div>
  );
};
export default HomeContent;

