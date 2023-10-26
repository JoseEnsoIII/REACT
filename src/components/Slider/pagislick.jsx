import React, { useState } from "react";
import Carousel from "nuka-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faPlay,
  faFilm,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Movietabs from '../tabs/Movietabs'

const customDotImages = [
  "/images/spidey.jpg", // Customize the paths as needed
  "/images/transformer.jpg",
  "/images/got.jpg",
  "/images/ig.jpg",
  "/images/d.jpg",
  "/images/s.jpg",
];
const CarouselButton = styled.a`
  background: #d6d4d4;
  border: 1px solid #d6d4d4;
  color: black;
  text-decoration: none;
  transition: background-color 0.5s;
  height: 50px;
  width: 100px;
  border-radius: 100px; /* You can simplify the border-radius to make it a circle */
  display: inline-flex; /* Use inline-flex to center both horizontally and vertically */
  align-items: center; /* Center vert/images/spidey.jpgically */
  justify-content: center; /* Center horizontally */
  margin: 10px;
  margin-left: 0px;
  border; 1px solid black;

  &:hover {
    background: black;
    color: white;
  }

  &.clicked {
    background: black;
    color: white;
  }
`;

function MyCarousel() {
  const [showTrailer, setShowTrailer] = useState(false);

  const carouselData = [
    {
      imageSrc: "/images/spidey.jpg",
      playLink: "/playing",
      trailerLink: "/trailer/spidey",
      text: "The Flash",
      genre: "Action",
    },
    {
      imageSrc: "/images/transformer.jpg",
      playLink: "/playing",
      trailerLink: "/trailer/transformer",
      text: "Transformer: Rise of The Beast",
      genre: "Sci-Fi",
    },
    {
      imageSrc: "/images/got.jpg",
      playLink: "/playing",
      trailerLink: "/trailer/got",
      text: "Guardians of the Galaxy Vol. 3",
      genre: "Adventure",
    },
    {
      imageSrc: "/images/ig.jpg",
      playLink: "/playing",
      trailerLink: "/trailer/ig",
      text: "Indiana Jones and the Dial of Destiny",
      genre: "Adventure",
    },
    {
      imageSrc: "/images/d.jpg",
      playLink: "/playing",
      trailerLink: "/trailer/d",
      text: "The Last Voyage of the Demeter",
      genre: "Horror",
    },
    {
      imageSrc: "/images/s.jpg",
      playLink: "/playing",
      trailerLink: "/trailer/s",
      text: "Spider-Man: Across the Spider-Verse",
      genre: "Action",
    },
    // Add more items with genres as needed
  ];

  return (
    <Carousel
      autoplay={true}
      wrapAround={true}
      speed={1000}
      slidesToShow={1}
      style={{
        height: "650px",
        backgroundColor: "#212016",
        marginTop: "5px",
      }}
      renderCenterLeftControls={({ previousSlide }) => (
        <button
          onClick={previousSlide}
          className="carousel-button"
          style={{
            left: "50px",
            background: "transparent",
            border: "none",
            color: "black",
          }}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="2x"
            color="black"
            style={{ fontSize: "40px" }}
          />
        </button>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <button
          onClick={nextSlide}
          className="carousel-button"
          style={{
            right: "50px",
            background: "transparent",
            border: "none",
            color: "black",
          }}
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            size="2x"
            color="black"
            style={{ fontSize: "40px" }}
          />
        </button>
      )}
      renderBottomCenterControls={({ slideCount, currentSlide, goToSlide }) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {carouselData.map((_, index) => (
            <img
              key={index}
              src={customDotImages[index]} // Use your custom dot image here
              alt={`Dot ${index + 1}`}
              style={{
                height: "50px",
                border: "1px solid black", // Set the height to 100px
                width: "100%", // Set the width to 100%
                marginBottom: "110px", // Add a 10px top margin and 5px horizontal margins
                cursor: "pointer",
                margin: "5px",
                opacity: currentSlide === index ? 1 : 0.5, // Highlight the active dot
                border: "1px solid black",
              }}
              onClick={() => goToSlide(index)} // Make the dot clickable
            />
          ))}
        </div>
      )}
    >
      {carouselData.map((item, index) => (
        <div key={index} className="carousel-item">
          <div style={{ position: "relative" }}>
            <img
              src={item.imageSrc}
              alt={`Image ${index + 1}`}
              style={{ width: "100%", height: "550px" }}
            />
            <div
              style={{
                position: "absolute",
                marginLeft: "50px",
                bottom: "60px",
                left: "0",
                right: "0",
                backgroundColor: "tranparent",
                color: "#000",
                fontWeight: "bold",
                padding: "5px 10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "50px",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {item.text}
                  <div
                    style={{
                      fontSize: "15px",
                      marginTop: "5px",
                      fontFamily: "Montserrat, sans-serif",
                      backgroundColor: "#fff",
                      color: "#000",
                      width: "100px",
                      height: "30px",
                      
                      display: "flex",
                      alignItems: "center", // Center vertically
                      justifyContent: "center", // Center horizontally
                      borderRadius: "100px", // Rounded border
                      border:"1px solid black",
                    }}
                  >
                    {item.genre}
                  </div>
                </div>
                <div style={{ fontSize: "15px" }}>
                  {showTrailer ? (
                    // Show the trailer content
                    <iframe
                      title={`Trailer ${index + 1}`}
                      width="560"
                      height="315"
                      src={item.trailerSrc}
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    // Show play and show trailer buttons
                    <>
                      <CarouselButton
                        href={item.playLink}
                        onClick={(event) => {
                          event.preventDefault(); // Prevent the link from navigating
                          event.target.classList.toggle("clicked"); // Toggle the "clicked" class
                        }}
                        style={{ height: "50px", border: "1px solid black" }} // Set the height of the CarouselButton
                      >
                        <FontAwesomeIcon
                          icon={faPlay}
                          size="2x"
                          style={{ height: "20px", marginRight: "5px" }} // Set the height of the FontAwesomeIcon
                        />
                        Play
                      </CarouselButton>

                      <CarouselButton
                        href={item.trailerLink}
                        onClick={(event) => {
                          event.preventDefault(); // Prevent the link from navigating
                          event.target.classList.toggle("clicked"); // Toggle the "clicked" class
                        }}
                        style={{ height: "50px", border: "1px solid black" }}
                      >
                        <FontAwesomeIcon
                          icon={faFilm}
                          size="2x"
                          style={{ height: "20px", marginRight: "5px" }} // Set the height of the FontAwesomeIcon
                        />
                        Trailer
                      </CarouselButton>
                      <CarouselButton
                        href={item.trailerLink}
                        onClick={(event) => {
                          event.preventDefault(); // Prevent the link from navigating
                          event.target.classList.toggle("clicked"); // Toggle the "clicked" class
                        }}
                        style={{ height: "50px", border: "1px solid black" }}
                      >
                        <FontAwesomeIcon
                          icon={faHeart}
                          size="2x"
                          style={{ height: "20px", marginRight: "5px" }} // Set the height of the FontAwesomeIcon
                        />
                      </CarouselButton>
                      <CarouselButton
                        href={item.trailerLink}
                        onClick={(event) => {
                          event.preventDefault(); // Prevent the link from navigating
                          event.target.classList.toggle("clicked"); // Toggle the "clicked" class
                        }}
                        style={{ height: "50px", border: "1px solid black" }}
                      >
                        <FontAwesomeIcon
                          icon={faShare}
                          size="2x"
                          style={{ height: "20px", marginRight: "5px" }} // Set the height of the FontAwesomeIcon
                        />
                        Share
                      </CarouselButton>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Movietabs />
    </Carousel>
  );
}

export default MyCarousel;
