import logo from "../assets/logo/logo.png";
const NavBar = () => {
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

      <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
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
        <form className="form-inline my-2 my-lg-0 d-none d-lg-block d-lg-flex">
          <input
            className="form-control mr-sm-2 me-3"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
