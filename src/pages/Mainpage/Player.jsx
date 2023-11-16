import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import Navbar from "../../components/Header/navbar";
import VideoPlayer from "../../componentsImport sectionVideoPlayer"
import MovieDetails from "../../componentsImport sectionmoviedetails";
import Similar from "../../componentsImport sectionSimilar"
import Recommendation from '../../componentsImport sectionRecommendation'
import Footer from "../../components/Footer/footer";
import Ads from "../../components/Ads/bottom-ads";
import PopUpAds from "../../components/Ads/popup-ads";

const StyledContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #000;
  margin-bottom: 10px;
`;



const FullScreenVideo = ({ videoSrc }) => {
  return (
    <StyledContainer>
      <Navbar />
     <VideoPlayer/>
      <MovieDetails />
      <Similar/>
      <Recommendation/>

      <PopUpAds />
      <Ads />
      <Footer />
    </StyledContainer>
  );
};

export default FullScreenVideo;
