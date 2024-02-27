import { useState } from "react";
import { updateState } from "./utils/WeatherDataHelper";
import { getWeatherDataService } from "./services/weatherdata.service";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";
import FavouriteLocationContent from "./components/FavouriteLocationContent";



const App = () => {
  const [searchBarText, setSearchBarText] = useState("");
  const [days, setDays] = useState([]);
  const [countryName, setCountryName] = useState("");

  const getWeatherData = async () => {
    try {
      const response = await getWeatherDataService(searchBarText); // call getWeatherDataService function
      setCountryName(response.city.name); // set countryName to the name of the city from the response
      const updatedDays = updateState(response); // call updateState helper function on the response
      setDays(updatedDays); // set the day state to updatedDays
    } catch (error) {
      console.error("Error fetching data", error);
    } 
  };



 
  return (
    <>
      <NavBar
        searchBarText={searchBarText}
        setSearchBarText={setSearchBarText}
      />
        <HomeContent
          days={days}
          countryName={countryName}
          searchBarText={searchBarText}
          setSearchBarText={setSearchBarText}
          getWeatherData={getWeatherData}
        />
      {/* )} */}
      {/* <FavouriteLocationContent /> */}
      <Footer />
    </>
  );
};

export default App;
