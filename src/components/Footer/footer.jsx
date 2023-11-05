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
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: 80% center;
  background-repeat: no-repeat;
  background-color: black;

  @media (max-width: 640px) {
    flex-direction: column;
    width: 100%;
    height: 50vh;
  }
`;

const Column = styled.div`
  flex: 1;
  max-width: calc(20% - 20px);
  padding: 10px;
  margin: 10px;
  font-size: 18px;

  @media (max-width: 640px) {
    margin: 3px;
    
  }
  &:first-child {
    margin-left: 30px;

    @media (max-width: 640px) {
      margin-left: 5px;
    }
  }

  h2 {
    font-size: 30px;
    margin-top: 15px;
    color: black;

    @media (max-width: 640px) {
      font-size: 15px;
    }
  }
  h3 {
    font-size: 18px;
    margin-top: 15px;
    color: black;

    @media (max-width: 640px) {
      font-size: 12px;
      margin-top: 15px;
      color: black;
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 15px;
    color: black;

    @media (max-width: 640px) {
      margin-bottom: 3px;
      font-size: 10px;
    }
  }

  p {
    color: black;

    @media (max-width: 640px) {
      color: black;
      font-size: 10px;
    }
  }

  a {
    text-decoration: none;
    color: black;

    &:hover {
      text-decoration: underline green;

      @media (max-width: 640px) { 
         font-size: 10px;
        &:hover {
          text-decoration: underline green;}
      
      }
    }
  }
`;

const SocialMediaList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 640px) {
  }
`;

const SocialMediaItem = styled.li`
  font-size: 20px;
  flex: 1;
  @media (max-width: 640px) {
    font-size: 10px;
  }
  &:first-child {
    margin-top: 0;
  }
`;

function App() {
  const facebookUrl = "https://www.facebook.com/";
  const twitterUrl = "https://twitter.com/";
  const instagramUrl = "https://www.instagram.com/";
  const linkedinUrl = "https://www.linkedin.com/";

  return (
    <Container>
      <Column>
        <h2>
          <strong>ReactFlix</strong>
        </h2>
        <p>
         is a Free Movies streaming app with zero
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
          <br />
          <SocialMediaItem>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </SocialMediaItem>
        </SocialMediaList>
      </Column>
    </Container>
  );
}

export default App;
