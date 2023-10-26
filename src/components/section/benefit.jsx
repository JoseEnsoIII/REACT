import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaTelegram, FaInstagram } from "react-icons/fa"; // Import icons from react-icons
import AOS from "aos"; // Import the react-aos library
import "aos/dist/aos.css"; // Import the CSS for AOS

// Create a styled component for the card container
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
`;

// Create a styled component for each card
const Card = styled.div`
  margin: 5px;
  position: relative;
  width: 370px;
  max-width: calc(100vw - 48px);
  min-height: 290px;
  padding: 40px 30px 30px;
  color: #000;
  background: #fff;
  box-shadow: 0 149px 60px rgba(0, 0, 0, 0.02), 0 84px 50px rgba(0, 0, 0, 0.08),
    0 37px 37px rgba(0, 0, 0, 0.13), 0 9px 21px rgba(0, 0, 0, 0.15),
    0 0 0 rgba(0, 0, 0, 0.16);
  border: 4px solid #fff;
  border-radius: 20px;
  text-align: left;
  transition: all 0.2s linear;
  border: 0.1px solid black;
  bottom: 50px;
`;

// Create a styled component for the headings

const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: black;
  font-family: "Gotham", sans-serif;
  font-weight: bold;
`;
const CardParagraph = styled.p`
  margin-top: 5px;
  font-size: 20px;
`;
const SectionWithMargin = styled.section`
  margin-top: -60px;
  height: 120vh;
  width: 100vw;
  border-top: 1px solid white; /* Add a 1px solid white border to the top */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the content vertically within the container */
`;

const Modal = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  color: black;
  padding: 20px;
  z-index: 1000;
  border-radius: 10px;
  border: 1px solid black;
  text-align: center; /* Center the text inside the modal */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: black;
  font-size: 20px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SubscribeButton = styled.button`
  background-color: #e50914;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
`;
const SocialMediaIcons = styled.div`
  margin-top: 80px;
`;

const SocialMediaLink = styled.a`
  text-decoration: none;
  color: black;
  margin: 0 10px;
  font-size: 24px;
`;
const ThreeCardsComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <SectionWithMargin>
      <h1
       data-aos="fade-up"
        style={{   
          fontSize: "50px",
          fontWeight: "bold",
          fontFamily: "Gotham",
          marginTop: " 150px",
        }}
      >
        Benefits Watching on Our Website
      </h1>
      <CardContainer>
        <Card  data-aos="fade-up">
          <Heading>BingeWatch</Heading>
          <br />

          <CardParagraph>
            Stream movies, TV Shows, and Anime Everywhere
          </CardParagraph>
          <CardParagraph>From Top Rated Movies ,TV Shows</CardParagraph>
          <CardParagraph>and Animes</CardParagraph>
          <ButtonContainer>
            <a
              href="/home"
              style={{
                backgroundColor: "#e50914",
                border: "none",
                borderRadius: "5px",
                color: "white",
                fontSize: "16px",
                padding: "10px 20px",
                textDecoration: "none", // Remove underline for the link
                display: "inline-block", // Make the link behave like a block element
                cursor: "pointer",
              }}
            >
              Browse
            </a>
          </ButtonContainer>
        </Card>
        <Card  data-aos="fade-up">
          <Heading>You Can Watch Every Stream You Like for Free</Heading>
          <CardParagraph>
            You can also Subscribe For $5 Subscription
          </CardParagraph>
          <CardParagraph>for Free Ads Lifetime</CardParagraph>
          <CardParagraph>
            You Can Download Movies, TV Shows, And More
          </CardParagraph>
          <ButtonContainer>
            <button
              onClick={toggleModal}
              style={{
                backgroundColor: "#e50914",
                border: "none",
                borderRadius: "5px",
                color: "white",
                fontSize: "16px",
                padding: "10px 20px",
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </ButtonContainer>
          <Modal isOpen={isModalOpen}>
            <CloseButton onClick={toggleModal}>&times;</CloseButton>
            <CardParagraph>For 5$ </CardParagraph>
            <SubscribeButton>Subscribe Now</SubscribeButton>
          </Modal>
        </Card>
        <Card  data-aos="fade-up">
          <Heading>Send Feedback/Request</Heading>
          <br />

          <CardParagraph>Send Feedback to our Social Media</CardParagraph>
          <CardParagraph>Send Request to our Social Media</CardParagraph>
          <ButtonContainer>
            <SocialMediaIcons>
              <SocialMediaLink
                href="URL_TO_FEEDBACK_SOCIAL_MEDIA"
                target="_blank"
              >
                <FaFacebook />
              </SocialMediaLink>
              <SocialMediaLink
                href="URL_TO_REQUEST_SOCIAL_MEDIA"
                target="_blank"
              >
                <FaTwitter />
              </SocialMediaLink>
              <SocialMediaLink
                href="https://t.me/+LsaZCwdEMe1iNzQ1"
                target="_blank"
              >
                <FaTelegram />
              </SocialMediaLink>
              <SocialMediaLink
                href="URL_TO_INSTAGRAM_SOCIAL_MEDIA"
                target="_blank"
              >
                <FaInstagram />
              </SocialMediaLink>
            </SocialMediaIcons>
          </ButtonContainer>
        </Card>
      </CardContainer>
    </SectionWithMargin>
  );
};

export default ThreeCardsComponent;
