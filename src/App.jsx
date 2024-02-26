import { useEffect, useState } from "react";
import { updateState } from "./utils/WeatherDataHelper";
import { getWeatherDataService } from "./services/weatherdata.service";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";
import FavouriteLocationContent from "./components/FavouriteLocationContent";
// import dummyWeatherData from "../data/dummyWeatherData.json";
// const days = updateState(dummyWeatherData.dublin);


const App = () => {
  const [searchBarText, setSearchBarText] = useState("");
  const [days, setDays] = useState([]);

  const getWeatherData = async () => {
    try {
      const returnedData = await getWeatherDataService();
      const updatedDays = updateState(returnedData);
      setDays(updatedDays);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <>
      <NavBar
        searchBarText={searchBarText}
        setSearchBarText={setSearchBarText}
      />
      <HomeContent
        days={days}
        searchBarText={searchBarText}
        setSearchBarText={setSearchBarText}
      />
      {/* <FavouriteLocationContent /> */}
      <Footer />
    </>
  );
};

export default App;
