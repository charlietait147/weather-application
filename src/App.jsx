import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";
import FavouriteLocationContent from "./components/FavouriteLocationContent";
import WeatherPage from "./components/WeatherPage";


const App = () => {

  return (
    <Router>
      <>
        <NavBar />
        <Routes>
          <Route index element={<HomeContent />} />
          <Route
            path="favourite-locations"
            element={<FavouriteLocationContent />}
          />
          <Route
            path="weather/:id" // Define route with id parameter
            element={<WeatherPage />}
          />
        </Routes>
        <Footer />
      </>
    </Router>
  );
};

export default App;