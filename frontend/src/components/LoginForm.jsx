import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth.service.js";

import "./LoginForm.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

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

    try {
      const data = await login(username, password);

      console.log("User logged in successfully", data);
      navigate("/home");
    } catch (error) {
      console.log("Login error:", error.message);
      setError(`Login failed: ${error.message}`);
    }
  };

  return (
    // <div className="login-background-container">
      <div className="container p-5 d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center py-2 text-white position-relative">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="text-white positon-relative">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group py-2">
            <label htmlFor="password" className="text-white position-relative">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Login
          </button>
          {error && <div className="alert alert-danger mt-2">{error}</div>}
        </form>
      </div>
    // </div>
  );
};

export default LoginForm;
