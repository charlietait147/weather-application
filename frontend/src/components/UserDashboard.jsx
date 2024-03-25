import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

import logo from "../assets/logo/logo.png";

import "./UserDashboard.css";

const UserDashboard = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="dashboard-background-container">
         <img
          src={logo}
          alt="logo"
          width="90"
          height="90"
        //   className="align-text-top"
        />
          <LoginForm />
          <div className="text-center">
        <button
          className="btn btn-light mt-3"
          onClick={() => handleRegister()}
        >
          Register
        </button>
          </div>
        </div>
      );
};

export default UserDashboard;
