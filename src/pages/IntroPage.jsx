import React from "react";
import styled from "styled-components";
import Navbar from "../components/Header/navbar";
import MovieSlider from "../components/section/reactf";
import Benefit from '../components/section/benefit';
import Footer from "../components/Footer/footer";
import Ads from "../components/Ads/bottom-ads";
import PopUpAds from "../components/Ads/popup-ads";

const PageWrapper = styled.div`
  background-image: url("/images/ssa.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh; /* 100% of the viewport height */
  width: 100vw; /* 100% of the viewport width */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  text-align: center; /* Center text within */
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  text-align: center; /* Center text within */
`;

const Heading = styled.h1`
  color: white;
  font-size: 50px;
  margin-top: -20px;
  font-family: "Gotham", sans-serif;
  font-weight: bold;
`;

const GetStartedLink = styled.a`
  background-color: #e50914;
  color: white;
  font-size: 18px;
  text-decoration: none;
  margin-top: 10px;
  border: 2px solid #e50914;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Gotham", sans-serif;
  font-weight: bold;
`;

const IntroPage = () => {
  return (
    <section>
      <PageWrapper>
        <Navbar />
        <ContentWrapper>
          <Heading>
            Unlimited movies, TV shows, and <br /> more
          </Heading>
          <GetStartedLink href="/home">Get Started</GetStartedLink>
        </ContentWrapper>
      </PageWrapper>
      <MovieSlider /> 
      <Benefit />
      <PopUpAds />
      <Ads />
      <Footer />
    </section>
  );
};

export default IntroPage;
