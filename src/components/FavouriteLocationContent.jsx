import bookmarkIcon from "../assets/icons/bookmark.svg";
import "./FavouriteLocationContent.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const FavouriteLocationContent = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavourites =
      JSON.parse(localStorage.getItem("favourites")) || []; // Retrieve existing favourites from local storage or initialize an empty array
    setFavourites(storedFavourites); // Set the favourites state to the stored favourites
  }, []);

  const clickHandler = (favouriteToRemove) => {
    console.log("favourite removed");
    console.log(favouriteToRemove);
    const updatedFavourites = favourites.filter(favourite => favourite !== favouriteToRemove); // filter out the favouriteToRemove from the favourites array
    // setFavourites([...updatedFavourites]); // update the favourites state
    setFavourites(updatedFavourites); // update the favourites state
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites)); // update the favourites in local storage
  };


  return (
    <div className="location-container pt-4 vh-100">
      <div className="background-overlay"></div>
      <div className="container">
        <h1 className="text-center text-white position-relative">
          Telling you about...
        </h1>
        <h1 className="text-center text-white position-relative pb-2">
          Favourite Locations
        </h1>
        <div className="px-4">
          <p className="text-white position-relative d-inline pe-2">Click</p>
          <img
            src={bookmarkIcon}
            alt="bookmark icon"
            className="bg-secondary position-relative"
          />
          <p className="text-white position-relative d-inline ps-2">
            to remove from favourites
          </p>
          <p className="text-white position-relative pt-1">
            Click name to view info
          </p>
        </div>

        <div className="row row-cols-sm-2 row-cols-md-3">
          {favourites.length > 0 ? (
            favourites.map((favourite, index) => (
              <div
                className="d-flex align-items-center justify-content-center py-2"
                key={index}
              >
                <img
                  src={bookmarkIcon}
                  alt="bookmark icon"
                  className="bg-secondary position-relative"
                  onClick={() => clickHandler(favourite)}
                />
                <Link
                  to={`/weather/${favourite}`}
                  className="text-white position-relative m-0 px-2 text-decoration-none"
                >
                  {favourite}
                </Link>
              </div>
            ))
          ) : (
            <p className="text-white position-relative m-0 px-2">
              No Favourite Locations
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavouriteLocationContent;
