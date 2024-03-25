import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { fetchFavouriteLocations } from "../services/favouritelocations.service.js";

import logo from "../assets/logo/logo.png";
import searchIcon from "../assets/icons/search.svg";

const NavBar = ({userId}) => {
  const [favourites, setFavourites] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   const storedFavourites =
  //     JSON.parse(localStorage.getItem("favourites")) || []; // Retrieve existing favourites from local storage or initialize an empty array
  //   setFavourites(storedFavourites); // Set the favourites state to the stored favourites
  // }, []);

  useEffect(() => {
    if (!userId) {
      return; // If userId is null, do not fetch favorite locations
    }

    const getFavoriteLocations = async () => {
      try {
        const locations = await fetchFavouriteLocations(userId); // Fetch favorite locations for the user

        const extractedLocations = locations.map((location) => location.location); // Extract the location from the response

        setFavourites(extractedLocations); // Set the extracted locations to the favourites state

      } catch (error) {
        console.error(error);
        // Handle error, e.g., show an error message to the user
      }
    };

    getFavoriteLocations();
  }, [userId, favourites]);

  const handleSearch = async (e) => {
    e.preventDefault();

    navigate(`/weather/${searchInput}`);
  };

  const logOutHandler = () => {
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <a className="navbar-brand" href="#">
        <img
          src={logo}
          alt="logo"
          width="90"
          height="90"
          className="d-inline-block align-text-top"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item px-2">
            <NavLink className="nav-link" to="/home" activeclassname="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item px-2">
            <NavLink
              className="nav-link"
              to="/favourite-locations"
              activeclassname="active"
            >
              My Favourite Locations
            </NavLink>
          </li>

          <li className="nav-item dropdown px-2">
            <Link
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              role="link"
              to="/favourite-locations"
            >
              My Saved Locations
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {favourites.map((favourite, index) => (
                <li key={index}>
                  <Link to={`weather/${favourite}`} className="dropdown-item">
                    {favourite}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <button className="btn btn-primary mt-2" onClick={logOutHandler}>
            Log Out
          </button>
        </ul>
        <div className="d-none d-lg-flex align-items-center  ">
          <input
            className="form-control mr-sm-2 me-3"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            data-testid="navbar-search-bar"
          />
          <button
            disabled={!searchInput}
            onClick={handleSearch}
            data-testid="navbar-search-button"
            style={{ border: "none", background: "none", cursor: "pointer" }}
          >
            <img src={searchIcon} alt="search icon" width={25} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
