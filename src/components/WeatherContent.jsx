import PropTypes from "prop-types";
import bookmarkIcon from "../assets/icons/bookmark.svg";
import "./WeatherContent.css";

const WeatherContent = ({ date, icon, temp, weather_desc, countryName }) => {

  const clickHandler = () => {
    localStorage.setItem("favourite", countryName); // set countryName to localStorage
    //add countryName to Favourite
  }
  return (
    <div className="container pt-4 px-4">
      <h1 className="text-center">Telling you about...</h1>
      <h1 className="text-center">{countryName}</h1>
      <div className="d-flex justify-content-center">
        <img src={bookmarkIcon} alt="bookmark icon" onClick={clickHandler} />
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

// const [isDropdownOpen, setIsDropdownOpen] = useState(false);

// const toggleDropdown = () => {
//   setIsDropdownOpen(!isDropdownOpen);
// };

{/* <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`} aria-labelledby="navbarDropdown"> */}

{/* <Link
className="nav-link dropdown-toggle"
id="navbarDropdown"
data-bs-toggle="dropdown"
aria-haspopup="true"
aria-expanded={isDropdownOpen}
role="link"
to="/favourite-locations"
onClick={toggleDropdown}
> */}