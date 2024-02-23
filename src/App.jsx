import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";
import dummyWeatherData from "../data/dummyWeatherData.json";

const App = () => {
  

  return (
    <>
      <NavBar />
      <HomeContent dummyWeatherData={dummyWeatherData} />
      <Footer />
    </>
  );
};

export default App;
