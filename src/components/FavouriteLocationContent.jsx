import bookmarkIcon from "../assets/icons/bookmark.svg";
import "./FavouriteLocationContent.css";
const FavouriteLocationContent = () => {
  return (
    <div className="location-container pt-4 vh-100">
      <div className="background-overlay"></div>
      <h1 className="text-center text-white position-relative">Telling you about...</h1>
      <h1 className="text-center text-white position-relative pb-2">Favourite Locations</h1>
      <div className="px-4">
        <p className="text-white position-relative d-inline pe-2">Click</p>
        <img src={bookmarkIcon} alt="bookmark icon" className="bg-white" />
        <p className="text-white position-relative d-inline ps-2">to remove from favourites</p>
        <p className="text-white position-relative">Click name to view info</p>
      </div>

      <div className="row row-cols-sm-2 row-cols-md-3">
        <div className="d-flex align-items-center justify-content-center py-2 ">
          <img src={bookmarkIcon} alt="bookmark icon" className="bg-white" />
          {localStorage.getItem("favourite") !== null ? (
            <p className="text-white position-relative m-0 px-2">{localStorage.getItem("favourite")}</p>
          ) : (
            <p className="text-white position-relative">No Favourite Locations</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavouriteLocationContent;
