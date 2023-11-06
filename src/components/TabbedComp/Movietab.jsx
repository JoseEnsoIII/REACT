import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa'; // Import the play icon

const Heading = styled.h1`
  text-align: center;
  font-family: 'Gotham', sans-serif;
  color: white;
  font-size: 30px; /* Set the font size */
  margin-left: -65%;
  font-weight:bold;

  @media (max-width: 640px) {
    margin-left: -45%;
    font-weight:bold;
    font-size: 20px;
    margin-top: 10%;

`;
const CardWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 200px;
  background: url(${(props) => props.imageUrl}) no-repeat center/cover;
  border-radius: 10px;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
  margin: 15px;
  transition: 0.5s;

  @media (max-width: 640px) {
    width: 80px;
  height: 100px;
  margin: 5px;
  }

  &:hover {
    transition: 1s;
    .title {
      padding-bottom: 50px;
      opacity: 1;
      transition: .3s;
      font-size: 10px;
    }
    .watch-button {
      opacity: 1;
      transition: 0.3s;
      font-size: 10px;
    }
  }

  .title {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    font-size: 26px;
    font-weight: 100;
    padding: 30px 0;
    background: linear-gradient(to top, #000, transparent);
    text-transform: uppercase;
    text-align: center;
    opacity: 0;
    transition: 0.5s;
    color: white;
  }

  .watch-button {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: transparent;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    opacity: 0;
    transition: 0.5s;
  }

  .play-icon {
    margin-right: 5px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    height:100vh;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    margin-top:-10%;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  
`;

const PageButton = styled.button`
  background-color: white;
  border: 1px solid white;
  color: black;
  cursor: pointer;
  margin: 0 5px;
  font-size: 18px;
  font-family: "Gotham", sans-serif; /* Use the Gotham font */
  padding: 5px 10px;
  border-radius: 5px;
  outline: none;
  
  &:hover {
    background-color: transparent;
    color: blue;
  }

  ${(props) =>
    props.active &&
    `
    background-color: transparent;
    color: blue;
  `}
  
  @media (max-width: 640px) {
    font-size: 14px; /* Reduce font size for smaller screens */
    padding: 3px 8px; /* Adjust padding for smaller screens */
    height: 30px; /* Set a specific height for the button */
  }
`;
function Card() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 21; // Number of cards to display per page

  // Sample card data (contains 14 cards)
  const cardData = [
    
    {
        title: 'Saw X',
        imageUrl: 'https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg',
      },
      {
        title: 'Saw X',
        imageUrl: 'https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg',
      },
      {
        title: 'Saw X',
        imageUrl: 'https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg',
      },
      {
        title: 'Saw X',
        imageUrl: 'https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg',
      },
      {
        title: 'Saw X',
        imageUrl: 'https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg',
      },
      {
        title: 'Saw X',
        imageUrl: 'https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg',
      },
      {
        title: 'Saw X',
        imageUrl: 'https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg',
      },
      {
        title: 'Saw X',
        imageUrl: 'https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg',
      },
      {
        title: 'Saw X',
        imageUrl: 'https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg',
      },
      {
        title: 'Saw X',
        imageUrl: 'https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg',
      },
      {
        title: 'Saw X',
        imageUrl: 'https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg',
      },
      {
        title: 'Saw X',
        imageUrl: 'https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg',
      },
      {
        title: 'Saw X',
        imageUrl: 'https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg',
      },
      {
        title: 'Saw X',
        imageUrl: 'https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg',
      },
      {
        title: 'Saw X',
        imageUrl: 'https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg',
      },
      {
        title: 'Saw X',
        imageUrl: 'https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg',
      },
      {
        title: 'Saw X',
        imageUrl: 'https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg',
      },
      {
        title: 'Saw X',
        imageUrl: 'https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg',
      },
      {
        title: 'Saw X',
        imageUrl: 'https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg',
      },
      {
        title: 'Saw X',
        imageUrl: 'https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg',
      },
      {
        title: 'Saw X',
        imageUrl: 'https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg',
      },
      {
        title: 'Saw X',
        imageUrl: 'https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg',
      },
      {
        title: 'Saw X',
        imageUrl: 'https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg',
      },
      {
        title: 'Saw X',
        imageUrl: 'https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg',
      },
      {
        title: 'Saw X',
        imageUrl: 'https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg',
      },
      {
        title: 'Saw X',
        imageUrl: 'https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg',
      },
      {
        title: 'Saw X',
        imageUrl: 'https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg',
      },
      {
        title: 'Saw X',
        imageUrl: 'https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg',
      },
  ];

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const displayedCards = cardData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container style={{height:"120vh",width:"100vw",backgroundColor:"transparent",marginTop:"-6%",marginLeft:"-2%"}}>
       <Heading className="card-heading">| Trending Movies</Heading>

      <FlexContainer>
        {displayedCards.map((card, index) => (
          <CardWrapper key={index} imageUrl={card.imageUrl}>
            <div className="title">{card.title}</div>
            <button className="watch-button" href="/player">
              <FaPlay className="play-icon" /> Watch
            </button>
          </CardWrapper>
        ))}
      </FlexContainer>
      <Pagination>
        {Array.from({ length: Math.ceil(cardData.length / cardsPerPage) }, (_, i) => (
          <PageButton
            key={i}
            onClick={() => handlePageChange(i + 1)}
            active={i + 1 === currentPage}
          >
            {i + 1}
          </PageButton>
        ))}
      </Pagination>
    </Container>
  );
}

export default Card;
