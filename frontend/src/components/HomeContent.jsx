import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";

import "./HomeContent.css";
import NavBar from "./NavBar";



const HomeContent = () => {
  
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/");
    }
    }, [navigate]);



  const submitHandler = (e) => {
    e.preventDefault(); // prevent default form submission
    navigate(`/weather/${searchInput}`);
  };

    return (
      <>
      {/* <NavBar /> */}
      <div className="background-image">
        <div className="background-overlay"></div>
        <h1 className="text-white position-relative mb-lg-3">
          Tell me about ...
        </h1>
        <form
          onSubmit={submitHandler}
          className="form-inline my-2 d-flex justify-content-center align-items-center flex-column my-lg-0"
        >
          <input
            className="form-control mr-sm-2 position-relative"
            type="search"
            name="search"
            placeholder="Location name..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            aria-label="Search"
            data-testid="home-content-search-bar"
          />
          <button
            className="btn btn-success my-3 position-relative w-50"
            type="submit"
            data-testid="home-content-search-button"
            disabled={!searchInput} // disable button if searchBarText is empty
          >
            Search
          </button>
        </form>
      </div>
      </>
    );
  
};
export default HomeContent;
