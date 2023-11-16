import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import Navbar from "../../components/Header/navbar";
import VideoPlayer from "../../components/VideoPlayer"
import MovieDetails from "../../components/moviedetails";
import Similar from "../../components/Similar"
import Recommendation from '../../components/Recommendation'
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
