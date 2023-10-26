import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

const SlideWithBorder = styled.div`
  border: 2px solid #ddd;
  padding: 10px;
  
`;

const SlideContent = styled.div`
  overflow: hidden; /* Prevent image overflow */
  text-align: center; /* Center the content */
  margin: 10px;
`;

const SlideImage = styled.img`
  max-width: 100%; /* Ensure the image fits within the container */
`;

export default class ResponsiveSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <section>
        <h2>Responsive Slider</h2>
        <Slider {...settings}>
          <SlideWithBorder>
            <SlideContent>
              <SlideImage src="/images/lou.jpg" alt="Image 1" />
              <button className="play-button">Play</button>
            </SlideContent>
          </SlideWithBorder>
          <SlideWithBorder>
            <SlideContent>
              <SlideImage src="/images/lou.jpg" alt="Image 2" />
              <button className="play-button">Play</button>
            </SlideContent>
          </SlideWithBorder>
          {/* Add similar content for other slides */}
        </Slider>
      </section>
    );
  }
}
