import React from "react";
import styled from "styled-components";
import Navbar from "../components/Header/navbar1";
import Footer from "../components/Footer/footer";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import Ads from "../components/Ads/bottom-ads";
import PopUpAds from "../components/Ads/popup-ads";

const Container = styled.div`
  display: flex;
  justify-content: center; /* Center the cards horizontally */
  align-items: center; /* Center the cards vertically */
  min-height: 100vh; /* Make the container at least as tall as the viewport */
  background-color: #f0f0f0; /* Add a background color to the container */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add a box shadow to the container */
`;

const Card = styled.div`
  width: 250px;
  height: 100%;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.8);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 20px;

  @media screen and (max-width: 400px) {
    width: 150px; /* Adjust the width as needed for screens between 300px and 400px */
  }
`;

const CardImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const IconLink = styled.a`
  display: inline; /* Change the display property to inline */
  margin-right: 10px; /* Add some spacing between the icons */
  text-decoration: none; /* Correct the property name to 'none' */
  color: #333; /* Change the color as needed */
`;

const IconText = styled.span`
  margin-left: 5px;
`;

const CardContainer = () => {
  return (
    <section style={{ height: "120vh" }}>
      <Navbar />
      <Container>
        <Card>
          <CardImage
            src="/images/370299143_1288273585150350_8250967309979388932_n.jpg"
            alt="Profile 1"
          />
          <CardContent>
            <h2>EnsoIII, Jose</h2>
            <p>Mern Stack Developer</p>
            <p>Owner of this Website and the frontend</p>
            <div>
              <IconLink
                href="https://github.com/yourgithubprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />

              </IconLink>
              <IconLink
                href="https://facebook.com/yourfacebookprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={20} />

              </IconLink>
              <IconLink
                href="https://linkedin.com/in/yourlinkedinprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} />

              </IconLink>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardImage
            src="/images/370299143_1288273585150350_8250967309979388932_n.jpg"
            alt="Profile 1"
          />
          <CardContent>
            <h2>EnsoIII, Jose</h2>
            <p>Owner of this Website and the frontend</p>
            <div>
              <IconLink
                href="https://github.com/yourgithubprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />

              </IconLink>
              <IconLink
                href="https://facebook.com/yourfacebookprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={20} />

              </IconLink>
              <IconLink
                href="https://linkedin.com/in/yourlinkedinprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} />

              </IconLink>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardImage
            src="/images/370299143_1288273585150350_8250967309979388932_n.jpg"
            alt="Profile 1"
          />
          <CardContent>
            <h2>EnsoIII, Jose</h2>
            <p>Owner of this Website and the frontend</p>
            <div>
              <IconLink
                href="https://github.com/yourgithubprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />

              </IconLink>
              <IconLink
                href="https://facebook.com/yourfacebookprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={20} />

              </IconLink>
              <IconLink
                href="https://linkedin.com/in/yourlinkedinprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} />

              </IconLink>
            </div>
          </CardContent>
        </Card>
        {/* ... other cards */}
      </Container>
      <PopUpAds />
      <Ads />
      <Footer />
    </section>
  );
};

export default CardContainer;
