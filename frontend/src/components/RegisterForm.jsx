import { useState } from "react";
import { register } from "../services/auth.service.js";

import "./RegisterForm.css";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

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
    try {
      const data = await register(username, password);

      if (data?.error) {
        setError(data.error);
        return;
      }
      console.log("User registered successfully", data);
      setMessage("User registered successfully");
    } catch (error) {
      // Handle other errors
      setError("Registration failed");
    }
  };

  return (
    <div className="background-container">
      <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center py-2">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group py-2">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
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
      </div>
    </div>
  );
};

export default RegisterForm;
