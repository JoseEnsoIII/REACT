import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faShare } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";

const StyledSliderContainer = styled.div`
  margin: 10px;
  background: #000000,
          background: linear-gradient(to top, #000000 50%, #12104A 100%),
`;

class MultipleRows extends Component {
  render() {
    const settings = {
      className: "center ",
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      rows: 5,
      slidesPerRow: 2,
      margin: "10px",
    };

    const numberOfSlides = 50; // Change this number to the desired number of slides

    // Create an array of card objects with title, description, and image URL
    const cards = [
      {
        title: "Card 1",
        description: "Description for Card 1",
        imageUrl: "image-url-1.jpg",
      },
      {
        title: "Card 2",
        description: "Description for Card 2",
        imageUrl: "image-url-2.jpg",
      },
      // Add more card objects as needed
    ];

    return (
      <div style={{height:"120%"}}>
        <h2 style={{fontSize:"40px", marginLeft:"30px", color:"#000", }}>| Movies</h2>
        <StyledSliderContainer>
        <Slider {...settings}>
          {Array.from({ length: numberOfSlides }, (_, index) => (
            <div key={index}>
              <img
                src={`https://via.placeholder.com/150?text=Image${index + 1}`}
                alt={`Image ${index + 1}`}
              />
              <div>
                <h3>{cards[index % cards.length].title}</h3>
                <p>{cards[index % cards.length].description}</p>
                <div className="card-buttons">
                  <button className="download-button">
                    <FontAwesomeIcon icon={faDownload} /> Download
                  </button>
                  <button className="share-button">
                    <FontAwesomeIcon icon={faShare} /> Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        </StyledSliderContainer>
      </div>
    );
  }
}

export default MultipleRows;
