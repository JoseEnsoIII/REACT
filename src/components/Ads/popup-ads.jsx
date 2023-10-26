import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaWhatsapp, FaFacebookMessenger, FaTelegram,FaTimes } from "react-icons/fa";
import styled from "styled-components";

const PopupContainer = styled.div`
  display: ${props => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

const PopupAd = styled.div`
  background: white;
  width: 400px;
  height: 300px;
  margin: 100px auto;
  padding-bottom: 75px; /* Padding only on the bottom */
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Image = styled.img`
  width: 100%; /* Set the image width to cover the container */
  height: 100%; /* Set the image height to cover the container */
`;

const Text = styled.p`
  margin: 8px 0;
  font-family: "Gotham", sans-serif;
  font-weight: bold;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 17%;
  right: 38%;
  cursor: pointer;
  color: black;
  font-size: 15px;
  border-radius:25%;
`;





const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin: 5px 0;
`;

const Icon = styled.div`
  font-size: 20px;
  cursor: pointer;
`;

const PopupAdComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Set a timeout to show the pop-up after a few seconds (e.g., 5 seconds)
    const timeoutId = setTimeout(() => {
      setIsOpen(true);
    }, 5000); // Adjust the time as needed

    // Clean up the timeout to prevent memory leaks
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  return (
    <PopupContainer isOpen={isOpen}>
      <PopupAd>
      <CloseButton onClick={handleCloseClick}>
          <FaTimes />
        </CloseButton>
        <Image src="images/lou.jpg" alt="Advertisement Image" />
        <Text>Special Offer: 20% off on all products!</Text>
        <SocialIcons>
          <Icon>
            <FaFacebook />
          </Icon>
          <Icon>
            <FaTwitter />
          </Icon>
          <Icon>
            <FaWhatsapp />
          </Icon>
          <Icon>
            <FaFacebookMessenger />
          </Icon>
          <Icon>
            <FaTelegram />
          </Icon>
        </SocialIcons>
       
      </PopupAd>
    </PopupContainer>
  );
};

export default PopupAdComponent;
