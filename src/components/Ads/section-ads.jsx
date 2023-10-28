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
  background: url('https://mjminnovations.com/wp-content/uploads/2016/10/Management_Solutions-1.png') center/cover no-repeat; /* Use the image as the background */
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: -20px;
`;

const AdTextContainer = styled.div`
  background-color: transparent;
  padding: 20px;
  border-radius: 5px;
`;

const Button = styled.button`
display: inline-block;
padding: 10px 10px;
border: 2px solid #000; /* Add a 2px border */
border-radius: 15px; /* Add border radius */
font-family: 'Gotham', sans-serif; /* Use the Gotham font */
text-decoration: none;
color: #000; /* Set the text color */
font-weight:bold;
font-size:15px;
margin:10px;
`;

export default SectionAds;
