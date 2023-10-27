import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import backgroundImage from "/images/op1.jpg";

const Container = styled.div`
  margin-top: -60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 5px;
  /* Add background image styles */
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: 80% center; /* Move the image to the right end and center vertically */
  background-repeat: no-repeat;
  background-color: black;

  @media (max-width: 300px) {
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    overflow-x: auto;
    height: 250px;
  }

  @media (min-width: 600px) and (max-width: 800px) {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    height: 130px;
  }
`;

const Column = styled.div`
  flex: 1;
  max-width: calc(20% - 20px);
  padding: 10px;
  margin: 10px;
  font-size: 18px; /* Default font size */

  &:first-child {
    margin-left: 30px; /* Add left margin to the first column */
  }

  h2,
  h3 {
    font-size: 18px;
    margin-top: 15px;
    color: black;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 15px;
    color: black;
  }

  p {
    color: black;
  }

  a {
    text-decoration: none;
    color: black;

    &:hover {
      text-decoration: underline green;
    }
  }

  @media (max-width: 400px) and (min-width: 300px) {
    max-width: 100%; /* Remove max-width to fit all columns in the same line */
    width: 100%;
    margin: -10px;

    h2 {
      font-size: 5px; /* Adjust the font size for h2 on smaller screens */
      margin-top: 10px;
    }
    h3 {
      font-size: 6px; /* Adjust font size for h2 and h3 on smaller screens */
      margin-bottom: -25px;
      margin-top: 10px;

      &:last-child {
        margin-right: 20px; /* Corrected the property name */
      }
    }

    li {
      margin-bottom: -10px;
    }
    p {
      font-size: 5px; /* Adjust font size for p on smaller screens */
    }
    a {
      font-size: 5px;
    }
  }
  @media (min-width: 600px) and (max-width: 800px) {
    max-width: 100%;
    width: 100%;
    margin: -10px;
    margin-right: -15px;

    h2 {
      font-size: 5px;
      margin-top: 10px;
    }
    h3 {
      font-size: 10px;
      margin-bottom: -25px;
      margin-top: 10px;

      &:nth-child(2) {
        margin-right: 5px;
      }
    }

    li {
      margin-bottom: -10px;
    }
    p {
      font-size: 6px;
    }
    a {
      font-size: 5px;
    }
  }
`;
const SocialMediaList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex; /* Display icons in a row */
  flex-wrap: wrap; /* Allow icons to wrap to the next line on smaller screens */
  justify-content: space-between; /* Create two columns */

  @media (max-width: 400px) {
    flex-direction: row; /* Display icons in a single row on very small screens */
    justify-content: center; /* Center-align icons horizontally */
  }

  @media (min-width: 600px) and (max-width: 800px) {
    flex-direction: row; /* Display icons in a single row on medium screens */
    justify-content: center; /* Center-align icons horizontally */
  }
`;

const SocialMediaItem = styled.li`
  font-size: 20px;
  flex: 1; /* Distribute icons equally in the two columns */

  @media (max-width: 400px) {
    margin-bottom: 5px;
    margin-right: 5px; /* Adjust spacing between icons on very small screens */
  }

  &:first-child {
    margin-top: 0; /* Remove margin-top for the first social media icon */
  }

  @media (min-width: 600px) and (max-width: 800px) {
    margin-right: 5px; /* Adjust spacing between icons on medium screens */
  }
`;

function App() {
  // Define social media URLs
  const facebookUrl = "https://www.facebook.com/";
  const twitterUrl = "https://twitter.com/";
  const instagramUrl = "https://www.instagram.com/";
  const linkedinUrl = "https://www.linkedin.com/";

  return (
    <Container>
      <Column>
        <h2 style={{ fontSize: "30px" }}>
          <strong>ReactFlix</strong>
        </h2>
        <p>
          <strong>ReactFlix</strong> is a Free Movies streaming app with zero
          ads. We let you watch movies online without having to register or pay,
          with over 10,000 movies and TV-Series. You can also download full
          movies from MoviesCloud and watch them later if you want
        </p>
      </Column>
      <Column>
        <h3>
          <strong>ABOUT</strong>
        </h3>
        <ul>
          <li>
            <a href="/about">About ReactFlix</a>
          </li>
          <li>
            <a href="/term">Terms & Conditions</a>
          </li>
          <li>
            <a href="/legal">Legal</a>
          </li>
          <li>
            <a href="/contact">Contact us:</a>
          </li>
          <li>
            <a href="/faq">FAQs</a>
          </li>
        </ul>
      </Column>
      <Column>
        <h3>
          <strong>SHOW</strong>
        </h3>
        <ul>
          <li>
            <a href="/movie">Movies</a>
          </li>
          <li>
            <a href="/series">TV Shows</a>
          </li>
          <li>
            <a href="/anime">Anime</a>
          </li>
        </ul>
      </Column>
      <Column>
        <h3>
          <strong>GENRE</strong>
        </h3>
        <ul>
          <li>
            <a href="/horror">Horror</a>
          </li>
          <li>
            <a href="/sci-fi">Sci-Fi</a>
          </li>
          <li>
            <a href="/romance">Romance</a>
          </li>
          <li>
            <a href="/actions">Actions</a>
          </li>
          <li>
            <a href="/adventure">Adventure</a>
          </li>
        </ul>
      </Column>
      <Column>
        <h3>
          <strong>SOCIAL MEDIA</strong>
        </h3>
        <SocialMediaList>
          <SocialMediaItem>
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </SocialMediaItem>
          <SocialMediaItem>
            <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </SocialMediaItem>
          <SocialMediaItem>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </SocialMediaItem>
          <br/>
          <SocialMediaItem>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </SocialMediaItem>
        </SocialMediaList>
      </Column>
      <Column>
        <h3>
          <strong>CREDIT</strong>
        </h3>
        <ul>
          <li>
            <a href="/credit">About My Team</a>
          </li>
        </ul>
      </Column>
    </Container>
  );
}

export default App;
