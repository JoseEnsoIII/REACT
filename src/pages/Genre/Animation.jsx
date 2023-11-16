import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Header/navbar1';
import Anime from '../../components/Section/anime_section'
import Nuka from '../../components/Section/NukaSlider';
import Footer from '../../components/Footer/footer';

// Create a styled component for the Section
const StyledSection = styled.div`
  height: 150%; /* Tailwind classes can be used directly here */
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
