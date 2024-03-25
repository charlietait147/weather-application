import { Routes, Route, useLocation} from "react-router-dom";
import { useState, useEffect } from "react";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";
import FavouriteLocationContent from "./components/FavouriteLocationContent";
import WeatherPage from "./components/WeatherPage";
import UserDashboard from "./components/UserDashboard";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";


const App = () => {
  const [showNavBar, setShowNavBar] = useState(true); // Set showNavBar state to true
  // const [favourites, setFavourites] = useState([]);
  const locationHook = useLocation(); // Get location object from useLocation hook

  const user = JSON.parse(localStorage.getItem("user")); // Retrieve user from local storage 

  const userId = user ? user._id : null; // Retrieve user id from user object or set to null if user is null

  const location = user ? user.favouriteLocations: null; // Retrieve location from user object or set to null if user is null

 
 
  useEffect(() => {
  if(locationHook.pathname === "/" || locationHook.pathname === "/register"){
    setShowNavBar(false); // If the current path is "/", set showNavBar to false
  }
  else {
    setShowNavBar(true); // If the current path is not "/", set showNavBar to true
  }
}, [locationHook.pathname]);


  return (
      <>
      {showNavBar && <NavBar userId = {userId}/>}
        <Routes>
          <Route index element={<UserDashboard />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/home" element={<HomeContent />} />
          <Route
            path="favourite-locations"
            element={<FavouriteLocationContent userId = {userId} location = {location}  />}
          />
          <Route
            path="weather/:id" // Define route with id parameter
            element={<WeatherPage userId = {userId} />}
          />
        </Routes>
        <Footer />
      </>
  );
};

export default App;