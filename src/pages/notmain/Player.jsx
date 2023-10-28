import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import Navbar from "../../components/Header/navbar";
import VideoPlayer from "../../components/section/VideoPlayer"
import MovieDetails from "../../components/section/moviedetails";
import Similar from "../../components/section/Similar"
import Parallax from "../../components/section/Parallax"
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
      <Parallax/>
      <PopUpAds />
      <Ads />
      <Footer />
    </StyledContainer>
  );
};

export default FullScreenVideo;
