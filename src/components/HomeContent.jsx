
import "./HomeContent.css";
const HomeContent = ({dummyWeatherData}) => {
    {console.log(dummyWeatherData)};

  return (
    <div className="background-image">
      <div className="background-overlay"></div>
      <h1 className="text-white position-relative mb-lg-3">Tell me about ...</h1>
      <form className="form-inline my-2 d-flex justify-content-center align-items-center flex-column my-lg-0">
        <input
          className="form-control mr-sm-2 position-relative"
          type="search"
          placeholder="Location name..."
          aria-label="Search"
        />
        <button
          className="btn btn-success my-3 position-relative w-50"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};
export default HomeContent;

