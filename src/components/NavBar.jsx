import logo from "../assets/logo/logo.png";
import searchIcon from "../assets/icons/search.svg";
import { useState } from "react";

const NavBar = ({
  setErrorMessage,
  setSearchBarText,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = async (e) => {
    e.preventDefault();

    if (searchInput.trim() === "") { 
      setErrorMessage("Please enter a valid location");
      return;
    }

    setIsClicked(true);
    setSearchBarText(searchInput);
  };

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
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item dropdown px-2">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              My Saved Locations
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdown"
            ></div>
          </li>
        </ul>
        <div className="d-none d-lg-flex align-items-center  ">
          <input
            className="form-control mr-sm-2 me-3"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <img
            src={searchIcon}
            alt="search icon"
            width={25}
            onClick={clickHandler}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
