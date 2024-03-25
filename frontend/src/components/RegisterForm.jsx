import { useState } from "react";
import { register } from "../services/auth.service.js";

import { useNavigate } from "react-router-dom";

import "./RegisterForm.css";

import logo from "../assets/logo/logo.png";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleReturn = () => {
    navigate("/");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please enter all fields");
      return;
    }

    if (password.length < 4 || password.length > 10) {
      setError("Password must be between 4 and 10 characters");
      return;
    }

    if (!/^\d+$/.test(password)) {
      setError("Password must only contain numbers");
      return;
    }
    
    try {
      const data = await register(username, password);

      console.log("User registered successfully", data);
      setMessage("User registered successfully");
      setError(""); // Clear any previous errors
    } catch (error) {
      // Handle other errors
      setError("Registration failed");
    }
  };

  return (
    <div className="background-container">
        <img
          src={logo}
          alt="logo"
          width="90"
          height="90"
        />
      <div className="container vh-100 d-flex flex-column py-5 align-items-center">
      <h1 className="text-center py-2 text-white position-relative">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group py-2">
            <label htmlFor="username" className="text-white position-relative">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="text-white position-relative">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Register
          </button>
          {message && <p className="alert alert-success mt-2">{message}</p>}
          {error && <div className="alert alert-danger mt-2">{error}</div>}
        </form>
        <button
          className="btn btn-light mt-3"
          onClick={() => handleReturn()}
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
