import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Header/navbar1';
import Anime from '../../components/SectionPage/AnimeSection';
import Nuka from '../../components/section/NukaSlider';
import Footer from '../../components/Footer/footer';

// Create a styled component for the Section
const StyledSection = styled.div`
  height: 150%; 
  background-color:black;
  overflow-x: hidden;
`;

const Animation = () => {
  return (
    <StyledSection>
      <Navbar />
      <Nuka />
      <Anime/>
      <Footer />
    </StyledSection>
  );
};

export default Animation;
