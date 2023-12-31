import React, { Component } from "react";
import styled from "styled-components";
import { FaBars, FaUser, FaSearch } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFilm,
  faTv,
  faStar,
  faMobileAlt,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SidebarMenuBg = styled.div`
  position: fixed; /* Make the navigation bar sticky */
  top: 0; /* Stick it to the top of the viewport */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #191970;
  height: 70px;
  padding: 0 20px;
  font-family: "Gotham", sans-serif; /* Use the Gotham font */
  font-weight: bold; /* Make it bold */
  width: 100%; /* Ensure it spans the full width of the viewport */
  z-index: 100; /* Ensure it's above other content */
  border-bottom: 1px solid black; /* Add the 1px solid black border at the bottom */
`;

const Logo = styled(Link)`
  font-family: "Gotham", sans-serif;
  font-size: 24px;
  height: 80px;
  display: flex;
  align-items: center;
  margin-right: auto;
  padding: 0 20px;
  font-weight: bold;
  color: white;
  text-decoration: none; // Remove the underline
  
  @media (max-width: 640px) {
  font-size:20px;
  }
`;

const SideMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 15%;
  width: 300px;
  height: 100%;
  transition: right 0.3s ease-in-out;
  z-index: ${(props) => (props.isOpen ? "1000" : "-1")};
  background: rgba(255, 255, 255, 0.1); /* Adjust the background color and opacity */
  backdrop-filter: blur(10px); /* Adjust the blur amount for the glassmorphism effect */
  border-radius: 10px; /* Add border-radius for rounded corners */
  /* ... other styles */

  @media (max-width: 1200px) {
    width: 280px;
  }

  @media (max-width: 992px) {
    width: 250px;
  }

  @media (max-width: 768px) {
    width: 200px;
    right: 0;
  }

  @media (max-width: 320px) {
    width: 180px;
  }
`;


const HeaderButton = styled.div`
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 5%;
  margin-right: 20%; // Updated margin for smaller screens
  border: 1px solid black;
  height: 30px;
  border-radius: 5px;

  @media (max-width: 1200px) {
    margin-right: 5%;
  }

  @media (max-width: 992px) {
    margin-right: 5%;
  }

  @media (max-width: 768px) {
    margin-right: 5%;
  }

  @media (max-width: 640px) {
    margin-right: 5%; // Hide the HeaderButton on smaller screens
  }

  @media (max-width: 320px) {
    margin-right: 5%;// Hide the HeaderButton on screens less than 320px
  }
`;


const Search = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    margin-right: 0;
    display:none;
  }
  
  @media (max-width: 640px) {
    display: none; // Hide the NavButton on smaller screens
  }
`;



const LoginLink = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-right: 15%;

  @media (max-width: 1200px) {
    margin-right: 10%;
   
  }

  @media (max-width: 992px) {
    margin-right: 10%;
    display: none;
  }

  @media (max-width: 768px) {
    margin-right: 10%;
    display: none;
  }

  @media (max-width: 640px) {
    display: none; // Hide the LoginLink on smaller screens
  }
`;


const GenreGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const GenreTag = styled.a`
  padding: 5px 10px;
  background-color: transparent;
  color: #000;
  border-radius: 5px;
  text-decoration: none;
  border: 1px solid black;
`;
const NavButton = styled.div`
color: white;
display: flex;
align-items: center;
margin: 20px;
font-family: "Gotham", sans-serif;
font-size: 16px;
margin-right: 23%;

ul {
  list-style: none;
  padding: 0;
  display: flex;
  margin: 0;
  justify-content: space-between;
}

li {
  margin: 0 25px;
  font-size: 20px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }

  a {
    text-decoration: none;
    color: white;
    position: relative;
    transition: color 0.3s, transform 0.3s;

    &:before {
      content: "";
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 100%;
      height: 3px;
      background: rgb(2,0,36);
      background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 50%, rgba(0,212,255,1) 100%);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s;
    }

    &:hover {
      color: #ffff;

      &:before {
        transform: scaleX(1);
      }
    }
  }
}
@media (max-width: 1000px) {
  margin-right: 0;
  display:none;
}

@media (max-width: 640px) {
  display: none; // Hide the NavButton on smaller screens
}
`;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      isSidebarOpen: false,
    };
  }

  toggleSidebar = () => {
    this.setState((prevState) => ({
      isSidebarOpen: !prevState.isSidebarOpen,
    }));
  };

  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { searchTerm, isSidebarOpen } = this.state;

    return (
      <nav style={{ height: "60px" }}>
        <SidebarMenuBg>
          <Logo to="/">ReactFlix </Logo>

          <HeaderButton onClick={this.toggleSidebar}>
            <FaBars style={{ width: "40px" }} />
          </HeaderButton>
          <Search>
            <FaSearch style={{ color: "white" }} />
          </Search>
          <NavButton>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/movie">Movies</Link>
              </li>
              <li>
                <Link to="/series">Series</Link>
              </li>
              <li>
                <Link to="/anime">Anime</Link>
              </li>
            </ul>
          </NavButton>
          <LoginLink href="/login">
            <FaUser className="user-icon" style={{ margin: "5px" }} />
            <span>Login</span>
          </LoginLink>
        </SidebarMenuBg>
        <SideMenuWrapper isOpen={isSidebarOpen}>
          <button
            onClick={this.toggleSidebar}
            style={{
              position: "absolute",
              top: "20px",
              right: "10px",
              borderRadius: "10px",
              width: "40px",
              height: "30px",
              background: "#666666",
              cursor: "pointer",
              border: "1px solid black",
              fontSize: "15px",
            }}
          >
            &larr;
          </button>

          <br />
          <ul>
            <h3 style={{ color: "black" }}>SideMenu</h3>
            <div style={{ marginBottom: "20px" }}>
              <a
                href="/home"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "20px",
                  marginLeft: "5px",
                }}
              >
                <FontAwesomeIcon icon={faHome} /> Home
              </a>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <a
                href="/movie"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "20px",
                  marginLeft: "5px",
                }}
              >
                <FontAwesomeIcon icon={faFilm} /> Movies
              </a>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <a
                href="/series"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "20px",
                  marginLeft: "5px",
                }}
              >
                <FontAwesomeIcon icon={faTv} /> TV Shows
              </a>
            </div>



            <div style={{ marginBottom: "20px" }}>
              <a
                href="/anime"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "20px",
                  marginLeft: "5px",
                }}
              >
                <FontAwesomeIcon icon={faMobileAlt} /> Anime
              </a>

            </div>
            <div style={{ marginBottom: "20px" }}>
              <a
                href="/top-imdb"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "20px",
                  marginLeft: "5px",
                }}
              >
                <FontAwesomeIcon icon={faStar} /> Top IMDB
              </a>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <a
                href="/login"
                style={{
                  color: "Red",
                  textDecoration: "none",
                  fontSize: "20px",
                  marginLeft: "5px",
                }}
              >
                <FontAwesomeIcon icon={faUsers} /> Login
              </a>
            </div>

            <h3 style={{ color: "black" }}>GENRE</h3>
            <GenreGridContainer>
              <GenreTag href="/action">Action</GenreTag>
              <GenreTag href="/action-adventure">Action & Adventure</GenreTag>
              <GenreTag href="/adventure">Adventure</GenreTag>
              <GenreTag href="/animation">Animation</GenreTag>
              <GenreTag href="/biography">Biography</GenreTag>
              <GenreTag href="/comedy">Comedy</GenreTag>
              <GenreTag href="/crime">Crime</GenreTag>
              <GenreTag href="/documentary">Documentary</GenreTag>
              <GenreTag href="/drama">Drama</GenreTag>
              <GenreTag href="/family">Family</GenreTag>
              <GenreTag href="/fantasy">Fantasy</GenreTag>
              <GenreTag href="/history">History</GenreTag>
              <GenreTag href="/horror">Horror</GenreTag>
              <GenreTag href="/kids">Kids</GenreTag>
              <GenreTag href="/music">Music</GenreTag>
              <GenreTag href="/mystery">Mystery</GenreTag>
              <GenreTag href="/news">News</GenreTag>
              <GenreTag href="/reality">Reality</GenreTag>
              <GenreTag href="/romance">Romance</GenreTag>
              <GenreTag href="/sci-fi-fantasy">Sci-Fi & Fantasy</GenreTag>
              <GenreTag href="/science-fiction">Science Fiction</GenreTag>
              <GenreTag href="/soap">Soap</GenreTag>
              <GenreTag href="/talk">Talk</GenreTag>
              <GenreTag href="/thriller">Thriller</GenreTag>
              <GenreTag href="/tv-movie">TV Movie</GenreTag>
              <GenreTag href="/war">War</GenreTag>
              <GenreTag href="/war-politics">War & Politics</GenreTag>
              <GenreTag href="/western">Western</GenreTag>
            </GenreGridContainer>
          </ul>
        </SideMenuWrapper>
      </nav>
    );
  }
}

export default Navbar;
