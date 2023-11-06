import React from 'react';
import styled from 'styled-components';

const SectionAds = () => {
  return (
    <AdsSection>
      <AdTextContainer>
        <Button href="/" target="_blank" style={{ marginTop: "200px" }}><a href="/" target="_blank" style={{color:"black",textDecoration:"none"}}>Visit Now</a></Button>
      </AdTextContainer>
    </AdsSection>
  );
};

const AdsSection = styled.section`
  background: url('https://mjminnovations.com/wp-content/uploads/2016/10/Management_Solutions-1.png') center/cover no-repeat;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: -20px;
  
  @media (max-width: 640px) {
    background-size: 640px; 
    height: 150px;
  }
`;

const AdTextContainer = styled.div`
  background-color: transparent;
  padding: 20px;
  border-radius: 5px;

  @media (max-width: 640px) {
    width: 100%;
    margin-top:-23%; /* Make the container fit within 640 pixels */
  }
`;

const Button = styled.button`
  display: inline-block;
  padding: 10px 10px;
  border: 2px solid #000;
  border-radius: 15px;
  font-family: 'Gotham', sans-serif;
  text-decoration: none;
  color: #000;
  font-weight: bold;
  font-size: 15px;
  margin: 10px;

  @media (max-width: 640px) {
    width: 20%;
    font-size: 10px;
    padding: 5px 5px;
  }
`;

export default SectionAds;
