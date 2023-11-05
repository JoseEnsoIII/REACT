import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaFacebookMessenger,
  FaTelegram,
  FaTimes,
} from "react-icons/fa";
import styled from "styled-components";

const PopupContainer = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;

  @media (max-width: 640px) {
    position: sticky;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    border: 1px solid #000; 
    box-shadow: 5px 5px 10px #888; 
    margin: 0 auto; 
    top: 20%;
    left:20%;
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

  @media (max-width: 640px) { 
    font-family: "Gotham", sans-serif;
    font-weight: bold;
    font-size:10px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 17%;
  right: 38%;
  cursor: pointer;
  font-size: 20px;
  border: none; /* Remove the border */
  outline: none;

  @media (max-width: 640px) {
    top: -20%; /* Adjust the top position for spacing on small screens */
    left: 85%; /* Adjust the right position for spacing on small screens */
    z-index: 1;
    background-color: transparent;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin: 5px 0;
`;

const Icon = styled.div`
  font-size: 20px;
  cursor: pointer;

  @media (max-width: 640px) { 
    font-weight: bold;
    font-size: 20px;
  }
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

    fetch("/api/close-ad", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ adName: "Special Offer Ad" }), // Change the ad name as needed
    });
  };

  return (
    <PopupContainer isOpen={isOpen}>
      <PopupAd>
        <CloseButton
          style={{ backgroundColor: "transparent", color: "red" }}
          onClick={handleCloseClick}
        >
          <FaTimes />
        </CloseButton>
        <Image
          Link="/"
          src="https://www.bing.com/th/id/OGC.b546f6c13f759dc4d834469fea2267fe?pid=1.7&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f27%2f94%2f6a%2f27946a99657cddf0cbde79a7e4e6f51f.gif&ehk=aEd7kEDfUPpHzTU%2blc4GOyKf1UOSaig012MuT1ceeMk%3d"
          alt="Advertisement Image"
        />
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
