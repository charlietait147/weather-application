import bookmarkIcon from "../assets/icons/bookmark.svg";
import "./FavouriteLocationContent.css";
import { Link } from "react-router-dom";
const FavouriteLocationContent = () => {
  const clickHandler = () => {
    console.log("favourite removed");
    if ("favourite" in localStorage) {
      localStorage.removeItem("favourite");
      console.log("favourite removed"); // remove countryName from localStorage
    };
   
  };
  return (
    <div className="location-container pt-4 vh-100">
      <div className="background-overlay"></div>
      <h1 className="text-center text-white position-relative">Telling you about...</h1>
      <h1 className="text-center text-white position-relative pb-2">Favourite Locations</h1>
      <div className="px-4">
        <p className="text-white position-relative d-inline pe-2">Click</p>
        <img src={bookmarkIcon} alt="bookmark icon" className="bg-secondary position-relative" />
        <p className="text-white position-relative d-inline ps-2">to remove from favourites</p>
        <p className="text-white position-relative">Click name to view info</p>
      </div>

      <div className="row row-cols-sm-2 row-cols-md-3">
        <div className="d-flex align-items-center justify-content-center py-2 ">
          <img src={bookmarkIcon} alt="bookmark icon" className="bg-secondary position-relative" onClick={clickHandler} />
          {localStorage.getItem("favourite") !== null ? (
            <Link to={`/weather/${localStorage.getItem("favourite")}`} className="text-white position-relative m-0 px-2 text-decoration-none">{localStorage.getItem("favourite")}</Link>
          ) : (
            <p className="text-white position-relative m-0 px-2">No Favourite Locations</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavouriteLocationContent;

