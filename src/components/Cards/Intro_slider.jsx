import React, { Component } from "react";
import Slider from "react-slick";
import { AiOutlineSwapRight, AiOutlineSwapLeft } from 'react-icons/ai';
import  CarouselItem  from "./CarouselItem";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: false,
    };

    const customDotStyles = {
      top: "90%",
      color: "black", // Adjusted to 20% from the bottom
    };

    const containerStyle = {
      height: "500px",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    };

    const buttonContainerStyle = {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      top: "45%",
      color: "black",
    };

    const buttonStyle = {
      padding: "10px 20px",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      color: "white",
      cursor: "pointer",
    };

    const carouselData = [
      {
        imageSrc: "/images/peacemaker.jpg",
        playLink: "/player",
        trailerLink: "/trailer/spidey",
        text: "Peacemaker",
        genre: "Action",
        genreLink: "/genre/action", // Add the genre link
      },
      {
        imageSrc: "/images/meg2.jpg",
        playLink: "/player",
        trailerLink: "/trailer/transformer",
        text: "One Piece: Live Action",
        genre: "Adventure",
        genreLink: "/genre/adventure", // Add the genre link
      },
      // Add more items with genre and genreLink
    ];

    return (
      <div style={containerStyle}>
        <Slider {...settings}>
          {carouselData.map((item, index) => (
            <CarouselItem
              key={index}
              imageSrc={item.imageSrc}
              text={item.text}
              genre={item.genre}
              genreLink={item.genreLink}
            />
          ))}
        </Slider>
        <div style={{ ...buttonContainerStyle, left: 0 }}>
          <div style={buttonStyle}>
            <AiOutlineSwapLeft size={20} />
          </div>
        </div>
        <div style={{ ...buttonContainerStyle, right: 0 }}>
          <div style={buttonStyle}>
            <AiOutlineSwapRight size={20} />
          </div>
        </div>
        <div className="custom-dot-container" style={customDotStyles}>
          <Slider {...settings} />
        </div>
      </div>
    );
  }
}
