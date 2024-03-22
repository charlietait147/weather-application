import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";
import FavouriteLocationContent from "./components/FavouriteLocationContent";
import WeatherPage from "./components/WeatherPage";
import UserDashboard from "./components/UserDashboard";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";




const App = () => {

  return (
    <Router>
      <>
        {/* <NavBar /> */}
        <Routes>
          <Route index element={<UserDashboard />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/home" element={<HomeContent />} />
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