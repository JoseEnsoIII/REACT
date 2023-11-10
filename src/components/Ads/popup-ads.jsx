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
  position: fixed; /* Use a fixed position to make it sticky */
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%); /* Center the element */
  width: 400px; /* Set your preferred width */
  height: 300px; /* Set your preferred height */
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000; /* Use a higher z-index to make it appear above other content */

  @media (max-width: 640px) {
    width: 200px;
    height: 200px;
    background-color: white;
     border:1px solid black;;
  }
`;

const PopupAd = styled.div`
background-color: white; /* Set the background color to white outside of the media query */
  width: 100%; /* Adjust the width to fill the container */
  height: 100%; /* Adjust the height to fill the container */

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 640px) {
    width: 100%; /* Adjust the width for mobile */
    height: 160%; /* Adjust the height for mobile */
    /* Other mobile styles as needed */
    z-index: 1000;
    background-color: white;
    align-items: center;
  }
`;


const Image = styled.img`
  width: 100%; /* Set the image width to cover the container */
  height: 100%; /* Set the image height to cover the container */
  
  @media (max-width: 640px) {
    width: 100%; /* Adjust the width for mobile */
    height: 100%;
  }
`;

const Text = styled.p`
  margin: 8px 0;
  font-family: "Gotham", sans-serif;
  font-weight: bold;
  background-color: white;

  @media (max-width: 640px) { 
    font-family: "Gotham", sans-serif;
    font-weight: bold;
    font-size:10px;
    background-color: white;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  cursor: pointer;
  font-size: 20px;
  border: none; /* Remove the border */
  outline: none;

  @media (max-width: 640px) {
    top: 5%; /* Adjust the top position for spacing on small screens */
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
  color:white;

  @media (max-width: 640px) { 
    font-weight: bold;
    font-size: 20px;
    color:black;
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
