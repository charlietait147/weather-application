import { useEffect, useState } from "react";
import { updateState } from "./utils/WeatherDataHelper";
import { getWeatherDataService } from "./services/weatherdata.service";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";
import FavouriteLocationContent from "./components/FavouriteLocationContent";

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [searchBarText, setSearchBarText] = useState(""); // set searchBarText to an empty string

  const getWeatherData = async () => {
    try {
      const response = await getWeatherDataService(searchBarText); // call getWeatherDataService function

      if (response && response.city && response.city.name) {
        setCountryName(response.city.name); // set countryName to the name of the city from the response
      }

      console.log(response);
      const updatedDays = updateState(response); // call updateState helper function on the response

      setWeatherData(updatedDays); // set the day state to updatedDays
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setErrorMessage("Invalid location");
      }
      console.error("Error fetching data", error);
      setErrorMessage("Data unavailable for this location");
      setCountryName(""); // Clear the country name
      setWeatherData([]); // Clear the days array
    }
  };

  useEffect(() => {
    if (searchBarText !== "") {
      getWeatherData();
    }
  }, [searchBarText]); 

  return (
    <>
      <NavBar
        setErrorMessage={setErrorMessage}
        weatherData={weatherData}
        searchBarText={searchBarText}
        setSearchBarText={setSearchBarText}
      />
      <HomeContent
        weatherData={weatherData}
        countryName={countryName}
        setErrorMessage={setErrorMessage}
        errorMessage={errorMessage}
        searchBarText={searchBarText}
        setSearchBarText={setSearchBarText}
      />
      {/* )} */}
      {/* <FavouriteLocationContent /> */}
      <Footer />
    </>
  );
};

export default App;
