import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Slide = styled.div`
  width: 350px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  margin: 200px 10px;
  margin-left: 20px; /* Add left gap */
  margin-right: 20px; /* Add right gap */
  position: relative;
  cursor: pointer;
  border-radius: 25px;
  transition: transform 0.3s ease, height 0.3s ease; /* Add transition for height */
  
  
  a {
    text-decoration: none;
    font-family: "Gotham", sans-serif;
  font-weight: bold;
  }
  /* Define styles for the play button */
  .play-button {
    position: absolute;
    top: 93%; /* Adjust to 90% from the bottom */
    left: 50%;
    transform: translate(
      -50%,
      -50%
    ); /* Center both horizontally and vertically */
    display: none;
    align-items: center;
    justify-content: center;
    color: white;
    width: 100px;
    height: 40px;
    background-color: #e50914; /* Add a semi-transparent background */
    border-radius: 15px; /* Make it round */
    border: 1px solid transparent;
    font-family: "Gotham", sans-serif;
  }

  &:hover {
    height: 520px; /* Adjust the height to your preference */
    transform: translateY(-25px); /* Push the card slightly up */
    text-decoration: underline;

    .play-button {
      display: flex; /* Display the play button on hover */
    }
  }
  @media (max-width: 360px), (max-width: 640px) {
    height: 210px;
    border: 1px solid transparent;
    width: 100%;

    &:hover {
      height: 250px; /* Adjust the height to your preference */
      transform: translateY(-25px); /* Remove the transform */
      text-decoration: underline;
    }
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: 450px;
  border-top-left-radius: 25px; /* Rounded top-left corner */
  border-top-right-radius: 25px; /* Rounded top-right corner */
  border-bottom-left-radius: 25px; /* Rounded top-left corner */
  border-bottom-right-radius: 25px; /* Rounded top-right corner */
  
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
  width: 20px; /* Adjust the width as needed */
  height: 20px; /* Adjust the height as needed */
  margin-right: 5px;
  color:white;
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
            <SlideImage src="/images/saw.jpg" alt="number 1" />
            <a href="/player" className="play-button">
              <CustomIcon src="/images/play.svg" alt="Play Icon" />  Watch
            </a>
          </Slide>
          <Slide>
            <SlideImage src="/images/mi.jpg" alt="number 1" />
            <a href="/player" className="play-button">
              <CustomIcon src="/images/play.svg" alt="Play Icon" />  Watch
            </a>
          </Slide>
          <Slide>
            <SlideImage src="/images/gt.jpg" alt="number 1" />
            <a href="/player" className="play-button">
              <CustomIcon src="/images/play.svg" alt="Play Icon" />  Watch
            </a>
          </Slide>
          <Slide>
            <SlideImage src="/images/sm.jpg" alt="number 1" />
            <a href="/player" className="play-button">
              <CustomIcon src="/images/play.svg" alt="Play Icon" />  Watch
            </a>
          </Slide>
          <Slide>
            <SlideImage src="/images/fc.jpg" alt="number 1" />
            <a href="/player" className="play-button">
              <CustomIcon src="/images/play.svg" alt="Play Icon" />  Watch
            </a>
          </Slide>
          <Slide>
            <SlideImage src="/images/lou.jpg" alt="number 1" />
            <a href="/player" className="play-button">
              <CustomIcon src="/images/play.svg" alt="Play Icon" />  Watch
            </a>
          </Slide>
        </Slider>
      </SectionWrapper>
    );
  }
}
