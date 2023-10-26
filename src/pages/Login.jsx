import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const buttonStyle = { width: "100%" };
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null); // State variable for error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const passwordInputType = showPassword ? "text" : "password";

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", formData) // Assuming this is the login endpoint
      .then((result) => {
        console.log(result);
        if (result.status === 200 && result.data === 'Success') {
          navigate("/dashboard");
        } else {
          setError("Invalid email or password. Please try again.");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("An error occurred. Please try again later.");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="mb-3">
            <label htmlFor="email" style={{ width: "100%" }}>
              <strong>Email</strong>
              <input
                type="email"
                id="email"
                placeholder="Enter Email"
                autoComplete="on"
                name="email"
                className="form-control rounded-0"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="password" style={{ width: "100%" }}>
              <strong>Password</strong>
              <input
                type={passwordInputType}
                id="password"
                placeholder="Enter Password"
                autoComplete="on"
                name="password"
                className="form-control rounded-0"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary" style={buttonStyle}>
            Signup
          </button>
          <span
            style={{ cursor: "pointer" }}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "Hide" : "Show"} Password
          </span>
        </form>
      </div>
    </div>
  );
}

export default Signup;
