import bookmarkIcon from "../assets/icons/bookmark.svg";
import "./FavouriteLocationContent.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFavouriteLocations } from "../services/favouritelocations.service.js";
import { deleteFavouriteLocation } from "../services/favouritelocations.service.js";

const FavouriteLocationContent = ({userId, location}) => {
  const navigate = useNavigate();
  const [favourites, setFavourites] = useState([]);


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/");
    }
    }, [navigate]);

    // const [favoriteLocations, setFavoriteLocations] = useState([]);

  useEffect(() => {
    if (!userId) {
      return; // If userId is null, do not fetch favorite locations
    }

    const getFavoriteLocations = async () => {
      try {
        const locations = await fetchFavouriteLocations(userId); // Fetch favorite locations for the user

        const extractedLocations = locations.map((location) => location.location); // Extract the location from the response

        setFavourites(extractedLocations); // Set the extracted locations to the favourites state
        // setFavourites(locations);

      } catch (error) {
        console.error(error);
        // Handle error, e.g., show an error message to the user
      }
    };

    getFavoriteLocations();
  }, [userId]);
      
  //handleDelete function

  //1. The delete function should take the locationId and the favourite location as an argument.

  //2. The delete function should call the deleteFavouriteLocation function with the userId and locationId.

  //3. The favourite state should filter out the favourite which matches the location name. 

  //4. The delete function should be called when the bookmark icon is clicked with the location name as an argument.


const handleDelete = async (favourite) => {
  try {
    // Find the location object in the array of locations

    const locationToDelete = location.find(loc => loc.location === favourite);

    console.log("Location to delete:", locationToDelete);

    if (!locationToDelete) {
      console.error("Location not found");
      return;
    }

    console.log("Deleting location with ID:", locationToDelete._id);

    // Call the delete function with the userId and locationId
    await deleteFavouriteLocation(userId, locationToDelete._id);
    
    // Update the local state to reflect the deleted location
    setFavourites(prevFavourites => prevFavourites.filter(loc => loc !== favourite));

    console.log("Location deleted:", favourite);
  } catch (error) {
    console.error(error);
    // Handle error, e.g., show an error message to the user
  }
};




  return (
    <>
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
                  alt="bookmark removal icon"
                  className="bg-secondary position-relative"
                  onClick={() => handleDelete(favourite)}
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
    </>

  );
};

export default FavouriteLocationContent;
