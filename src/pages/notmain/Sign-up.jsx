import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Add password state if needed
  const navigate = useNavigate();
  const buttonStyle = { width: "100%" }; // Button width style

  function handleSubmit(e) {
    e.preventDefault();

    // Create an object with the registration data
    const userData = {
      name,
      email,
      password,
    };

    // Make a POST request to your API endpoint to register the user
    axios
      .post('https://your-api-endpoint.com/register', userData)
      .then(response => {
        // Handle the server response, e.g., show a success message
        console.log('User registered successfully:', response.data);
        // Redirect to the login page or another page after successful registration
        navigate('/login');
      })
      .catch(error => {
        console.error('Error registering user:', error);
      });
  }

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" style={{ width: "100%" }}>
              <strong>Name</strong>
              <input
                type="text"
                id="name"
                placeholder="Enter Name"
                autoComplete="on"
                name="name"
                className="form-control rounded-0"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="password" style={{ width: "100%" }}>
              <strong>Password</strong>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                autoComplete="on"
                name="password"
                className="form-control rounded-0"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary" style={buttonStyle}>
            Register
          </button>
        </form>
        <div className="mt-3">
          <p>Already have an account?</p>
        </div>
        <div className="mt-3">
          <button className="btn btn-outline-primary" style={buttonStyle}>
            <a href="/login" style={{ textDecoration: "none", color: "inherit" }}>
              Login
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
