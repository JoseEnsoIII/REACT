import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaAd } from "react-icons/fa";

const AdContainer = styled.div`
  width: 100%;
  max-width: 1000px; /* Limit maximum width */
  height: 180px;
  background-color: #f0f0f0;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 998;
  
  @media (max-width: 640px) {
    height: 120px;
    width: 100%;
    margin-left: 20%; /* Position to the left end */
    position: Sticky;
    bottom:0;
    top: auto
  }
`;

const AdContent = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 3px;

  @media (max-width: 640px) {
  height:30px;
  
  }
`;

const AdText = styled.p`
  font-size: 15px;
  color: #333;
  margin: 0;
  display: flex;
  align-items: center; 
  justify-content: center; 
  font-family: "Gotham", sans-serif;
  font-weight: bold;
  svg {
    margin-right: 5px; 
  }

  @media (max-width: 640px) {
    font-size:10px;
    margin:10px;
  }
`;


const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 15px;
  color: #000;
  margin:10px;
  font-weight: bold;
`;

const Timer = styled.div`
  font-size: 15px;
  color: #999;
  display: flex;
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  margin-right:250px
  
  
  @media (max-width: 640px) {
    font-size:10px;
    font-family:Gotham;
  }
`;


const AdImage = styled.img`
  width: 100%;
  height: auto;
  @media (max-width: 640px) {
    margin-top:-5px;
  }
`;

function Ad() {
  const [isOpen, setIsOpen] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(180); // in seconds
  const [isAutoReopenEnabled, setIsAutoReopenEnabled] = useState(true);

  useEffect(() => {
    if (isOpen) {
      const autoCloseInterval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);

      const autoCloseTimeout = setTimeout(() => {
        handleCloseClick();
      }, 180000);

      return () => {
        clearTimeout(autoCloseTimeout);
        clearInterval(autoCloseInterval);
      };
    } else if (isAutoReopenEnabled) {
      // Reopen the ad after 2 minutes (120,000 milliseconds)
      const autoReopenTimeout = setTimeout(() => {
        setIsOpen(true);
        setTimeRemaining(180); // Reset the timer
      }, 120000);

      return () => {
        clearTimeout(autoReopenTimeout);
      };
    }
  }, [isOpen, isAutoReopenEnabled]);

  const handleCloseClick = () => {
    setIsOpen(false);
    setIsAutoReopenEnabled(true); // Enable auto-reopen
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <>
      {isOpen && (
        <AdContainer>
          <AdContent>
          <AdText>
  <FaAd style={{ margin:"10px" }} /> {/* Add the icon here */}
  Promote Your Ads/Products Here
</AdText>


            <Timer><AdText>Auto close in {formatTime(timeRemaining)}</AdText></Timer>
            <CloseButton onClick={handleCloseClick}>X</CloseButton>
          </AdContent>
          <AdImage
          href="/"
            src="https://3.imimg.com/data3/AM/KK/IMFCP-2767301/excelsoft-banners-solution-implementation.jpg"
            alt="Advertisement"
          />
        </AdContainer>
      )}
    </>
  );
}

export default Ad;
