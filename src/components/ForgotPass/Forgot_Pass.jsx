import React, { useState } from 'react';
import './ForgotPassword.css';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import logo from '/images/logo.png';
import { FaUserShield } from 'react-icons/fa';
import { AiOutlineSwapRight } from 'react-icons/ai';

const Login = () => {
    const [email, setEmail] = useState(''); // Change state variable name
    const navigateTo = useNavigate();
    const [status, setStatus] = useState('');
    const [statusHolder, setStatusHolder] = useState('message');

    const loginUser = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3002/login', {
            LoginUserName: email, // Change the field name
        }).then((response) => {
            if (response.data.message || email === '') {
                navigateTo('/login');
                setStatus(`Credentials Don't Exist!`);
            } else {
                navigateTo('/dashboard');
            }
        });
    };

    const onSubmit = () => {
        setEmail(''); // Clear the email input
    };

    return (
        <div className="loginPage flex">
            <div className="container flex">
                <div className="videoDiv">
                    {/* Add a div for the video here */}
                    <div className="video-container">
                        <video autoPlay muted loop>
                            <source src="/images/movie.mp4" type="video/mp4" />
                        </video>
                    </div>
                    {/* ... (existing text content) */}
                </div>
                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image" />
                        <h3>Forgot Password!</h3>
                    </div>
                    <form action="" className="form grid" onSubmit={onSubmit}>
                        <span className={statusHolder}>{status}</span>
                        <div className="inputDiv">
                            <label htmlFor="email">Email</label>
                            <div className="input flex">
                                <FaUserShield className="icon" />
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter Email"
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn flex" onClick={loginUser}>
                            <span>Send Reset Link</span>
                            <AiOutlineSwapRight className="icon" />
                        </button>
                        <span className="forgotPassword">
                            Forgot your password? <Link to="/forgot">Click Here</Link>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
