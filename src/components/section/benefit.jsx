import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaTelegram, FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: white;

  @media (max-width: 360px), (max-width: 640px) {
    margin-top:20%;
  }
`;
const CardRow = styled.div`
  display: flex; /* Make the cards appear in a row */
  flex-wrap: wrap; /* Allow the cards to wrap to the next line if the screen is too narrow */
  justify-content: center;
`;
const Card = styled.div`
  margin: 5px;
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
  bottom: 50px;
  display: flex;
  flex-direction: column;

  @media (max-width: 360px), (max-width: 640px) {
    
    height:350px;
    width:200px;
    margin: 10px; 
  }
`;

const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: black;
  font-family: "Gotham", sans-serif;
  font-weight: bold;

  @media (max-width: 360px), (max-width: 640px){
  font-size:15px;
  }
`;

const CardParagraph = styled.p`
  font-size: 15px;
  flex-grow: 1;

  @media (max-width: 360px), (max-width: 640px){
    font-size:10px;
    }
`;

const SectionWithMargin = styled.section`
  margin-top: -60px;
  height: 120vh;
  width: 100vw;
  border-top: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 360px), (max-width: 640px) {
    height: 1500px;
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
  margin-top: auto; /* Position the buttons at the bottom */

  @media (max-width: 360px), (max-width: 640px){
    width:10px;
    font-size:10px;
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
  display: inline-block;
  margin: 5px;
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
      <h1 data-aos="fade-up" style={{ fontSize: "50px", fontWeight: "bold", fontFamily: "Gotham", marginTop: " 120px" }}>
        Benefits Watching on Our Website
      </h1>
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
          </ButtonContainer>
        </Card>
        </CardRow>
      </CardContainer>
    </SectionWithMargin>
  );
};

export default ThreeCardsComponent;
