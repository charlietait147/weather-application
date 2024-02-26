import bookmarkIcon from "../assets/icons/bookmark.svg";
const FavouriteLocationContent = () => {
  return (
    <div className="container pt-4">
        <h1 className="text-center">Telling you about...</h1>
        <h1 className="text-center pb-2">Favourite Locations</h1>
        <p className="d-inline pe-2">Click</p><img src={bookmarkIcon} alt="bookmark icon" /><p className="d-inline ps-2">to remove from favourites</p>
        <p>Click name to view info</p>
    </div>
  )
}

export default FavouriteLocationContent