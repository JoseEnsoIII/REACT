import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaTelegram, FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const SectionWithMargin = styled.section`
  margin-top: -60px;
  height: 120vh;
  width: 100vw;
  border-top: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 640px) {
    height: auto; /* Adjust the height for smaller screens */
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  @media (max-width: 640px) {
  margin-top:20px;
  }
`;

const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  margin: 10px;
  position: relative;
  width: 370px;
  max-width: calc(100vw - 48px);
  height: 350px;
  padding: 40px 30px 30px;
  color: #000;
  background: #fff;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  border: 4px solid #fff;
  border-radius: 20px;
  text-align: left;
  transition: all 0.2s linear;
  border: 0.1px solid black;
  display: flex;
  flex-direction: column;

  @media (max-width: 640px) {
    width: 100%; /* Adjust the width for smaller screens */
    height: 250px;
    margin-top:5%;
    margin-bottom:10%;
    padding: 30px 20px 20px;
  }
`;
const MainHeading = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: black;
  font-family: "Gotham", sans-serif;
  margin-top: 120px;

  @media (max-width: 640px) {
    font-size: 30px; /* Adjust the font size for smaller screens */
    margin-top: 20px; /* Adjust the margin for smaller screens */
    text-align: center; /* Center the text horizontally */
  }
`;
const Heading = styled.h2`
  font-size: 24px;
  margin bottom: 10px;
  color: black;
  font-family: "Gotham", sans-serif;
  font-weight: bold;

  @media (max-width: 640px) {
    font-family: "Gotham", sans-serif;
    font-size: 15px;
    text-align: center; /* Center the text horizontally */
    display: flex;
    align-items: center; /* Center vertically */
    justify-content: center; /* Center horizontally */
  }
`;

const CardParagraph = styled.p`
  font-size: 15px;
  flex-grow: 1;

  @media (max-width: 640px) {
    font-size: 10px;
  }
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
  text-align: center;
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
  align-items: center; /* Center the buttons vertically */
  flex-direction: row; /* Make the buttons inline and horizontal */

  @media (max-width: 640px) {
    flex-direction: column; /* Stack buttons vertically on smaller screens */
    align-items: center;
  }
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
const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none;
  margin: 5px;

  @media (max-width: 640px) {
    margin: 0 5px; /* Apply horizontal margin on smaller screens */
    padding: 10px 15px; /* Adjust the padding for smaller screens */
    
  }
`;
const SocialMediaICon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row; /* Make the buttons inline and horizontal */

  @media (max-width: 640px) {
    flex-direction: row; /* Ensure buttons remain inline on smaller screens */
  }
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
      <MainHeading data-aos="fade-up" style={{ fontSize: "50px", fontWeight: "bold", fontFamily: "Gotham", marginTop: " 120px" }}>
        Benefits Watching on our Website
      </MainHeading>
      <CardContainer>
      <CardRow>
        <Card data-aos="fade-up">
          <Heading>BingeWatch</Heading>
          <CardParagraph>Stream movies, TV Shows, and Anime Everywhere</CardParagraph>
          <CardParagraph>From Top Rated Movies, TV Shows, and Animes</CardParagraph>
          <CardParagraph>and Animes</CardParagraph>
          <ButtonContainer>
            <a href="/home" style={{ backgroundColor: "#e50914", border: "none", borderRadius: "5px", color: "white", fontSize: "16px", padding: "10px 20px", textDecoration: "none", display: "inline-block", cursor: "pointer" }}>
              Browse
            </a>
          </ButtonContainer>
        </Card>
        <Card data-aos="fade-up">
          <Heading>You Can Watch Every Stream You Like for Free</Heading>
          <CardParagraph>You can also Subscribe For $5 Subscription</CardParagraph>
          <CardParagraph>for Free Ads Lifetime</CardParagraph>
          <CardParagraph>You Can Download Movies, TV Shows, And More</CardParagraph>
          <ButtonContainer>
            <StyledButton onClick={toggleModal} style={{ backgroundColor: "#e50914", border: "none", borderRadius: "5px", color: "white", fontSize: "16px", padding: "10px 20px", cursor: "pointer" }}>
              Subscribe
            </StyledButton>
          </ButtonContainer>
          <Modal isOpen={isModalOpen}>
            <CloseButton onClick={toggleModal}>&times;</CloseButton>
            <CardParagraph>for 1$ no ads 1 month</CardParagraph> <CardParagraph>for 10$ 1 year</CardParagraph> 
            <SubscribeButton><a href="/payment" style={{textDecoration:"none",color:"white"}}>Subscribe Now</a></SubscribeButton>
          </Modal>
        </Card>
        <Card data-aos="fade-up">
          <Heading>Send Feedback/Request</Heading>
          <CardParagraph>Send Feedback to our Social Media</CardParagraph>
          <CardParagraph>Send Request to our Social Media</CardParagraph>
          <CardParagraph>Send Request to our Social Media</CardParagraph>
          <ButtonContainer>
            <SocialMediaICon>
            <StyledButton  style={{ backgroundColor: "blue", border: "none", borderRadius: "5px", color: "white", fontSize: "16px", padding: "10px 20px", cursor: "pointer", margin: "5px" }}>
              <FaFacebook />
            </StyledButton>
            <StyledButton  style={{ backgroundColor: "skyblue", border: "none", borderRadius: "5px", color: "white", fontSize: "16px", padding: "10px 20px", cursor: "pointer", margin: "5px" }}>
              <FaInstagram />
            </StyledButton>
            <StyledButton  style={{ backgroundColor: "gray", border: "none", borderRadius: "5px", color: "white", fontSize: "16px", padding: "10px 20px", cursor: "pointer", margin: "5px" }}>
              <FaTelegram />
            </StyledButton>
            <StyledButton  style={{ backgroundColor: "black", border: "none", borderRadius: "5px", color: "white", fontSize: "16px", padding: "10px 20px", cursor: "pointer", margin: "5px" }}>
              <FaTwitter />
            </StyledButton>
            </SocialMediaICon>
          </ButtonContainer>
        </Card>
        </CardRow>
      </CardContainer>
    </SectionWithMargin>
  );
};

export default ThreeCardsComponent;
