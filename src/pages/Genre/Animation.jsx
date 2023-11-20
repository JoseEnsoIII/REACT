import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Header/navbar1';
import Anime from '../../components/SectionPage/AnimeSection';
import MovieSection from '../../components/SectionPage/MovieSection'
import MovieList from '../../components/section/MovieList'
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
      <MovieSection/>
      <MovieList/>

      <Footer />
    </StyledSection>
  );
};

export default Animation;
