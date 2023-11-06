import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const Slide = styled.div`
  width: 350px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 200px 10px;
 
  position: relative;
  cursor: pointer;
  border:none;
  padding:10px;
  transition: transform 0.3s ease, height 0.3s ease;
 
  @media (max-width: 640px) {
    margin-left:10px;
    padding:10px;
    border: 1px solid white;
  }
  a {
    text-decoration: none;
    font-family: "Gotham", sans-serif;
    font-weight: bold;
  }

  .play-button {
    position: absolute;
    top: 93%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    align-items: center;
    justify-content: center;
    color: white;
    width: 100px;
    height: 40px;
    background-color: #e50914;
    border-radius: 15px;
    font-family: "Gotham", sans-serif;

    @media (max-width: 640px) {
      top: 95%;
      width: 70px;
      margin-left: 5px;
      margin-right: 0;
      
    }
  }

  &:hover {
    height: 520px;
    transform: translateY(-25px);
    text-decoration: underline;
    
  

    .play-button {
      display: flex;
      
    }
  }

  @media (max-width: 640px) {
    margin-top: 350%;
    height: 200px;
    border:none;
    
    width: 100%;
    transform: translateY(0);

    &:hover {
      height: 260px;
      transform: translateY(-25px);
      text-decoration: underline;
      border:none;
    }
    &:active {
      
    }
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: 450px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;

  @media (max-width: 360px), (max-width: 640px) {
    font-size: 10px;
    margin: 5px;
    width: 100%;
    height: 200px;
  }
`;

const SectionWrapper = styled.section`
  background-color: black;
  height: 120vh;
  width: 100vw;
  position: relative;

  @media (max-width: 360px), (max-width: 640px) {
    font-size: 10px;
    margin: 3px;
    height: 100%;
  }
`;

const Heading = styled.h2`
  color: white;
  font-family: "Gotham", sans-serif;
  font-weight: bold;
  text-align: center;
  font-size: 50px;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  z-index: 1;
`;
const CustomIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  color: white;
`;

export default class SwipeToSlide extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000, // Set the duration of the animation (in milliseconds)
    });
  }
  componentDidUpdate() {
    AOS.refresh();
  }

  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "80px",
      slidesToShow: 4,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 3000, // Autoplay every 3 seconds (3000 milliseconds)
      speed: 500, // Animation speed (optional)
      pauseOnHover: true, // Pause autoplay on hover (optional)
      afterChange: function (index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
    };

    return (
      <SectionWrapper
        style={{
          background: "#000000",
          background: "linear-gradient(to top, #000000 50%, #12104A 100%)",
        }}
      >
        <Heading data-aos="fade-up">Discover Something New</Heading>

        <Slider {...settings}>
          {/* Slides */}
          <Slide>
            <a href="/player"><SlideImage src="/images/saw.jpg" alt="number 1"  /></a>
            <a href="/player" className="play-button">
              <CustomIcon src="/images/play.svg" alt="Play Icon" /> Watch
            </a>
          </Slide>
          <Slide>
          <a href="/player"><SlideImage src="/images/mi.jpg" alt="number 1" style={{marginLeft:"10"}} /></a>
            <a href="/player" className="play-button">
              <CustomIcon src="/images/play.svg" alt="Play Icon" /> Watch
            </a>
          </Slide>
          <Slide >
          <a href="/player"><SlideImage src="/images/gt.jpg" alt="number 1"  /></a>
            <a href="/player" className="play-button">
              <CustomIcon src="/images/play.svg" alt="Play Icon" /> Watch
            </a>
          </Slide>
          <Slide>
          <a href="/player"> <SlideImage src="/images/sm.jpg" alt="number 1"  /></a>
            <a href="/player" className="play-button">
              <CustomIcon src="/images/play.svg" alt="Play Icon" /> Watch
            </a>
          </Slide>
          <Slide>
             <a href="/player"><SlideImage src="/images/fc.jpg" alt="number 1"  /></a>
            <a href="/player" className="play-button">
              <CustomIcon src="/images/play.svg" alt="Play Icon" /> Watch
            </a>
          </Slide>
          <Slide>
             <a href="/player"><SlideImage src="/images/lou.jpg" alt="number 1"  /></a>
            <a href="/player" className="play-button">
              <CustomIcon src="/images/play.svg" alt="Play Icon" /> Watch
            </a>
          </Slide>
        </Slider>
      </SectionWrapper>
    );
  }
}
