import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa'; // Import the play icon

const Heading = styled.h1`
  text-align: center;
  font-fapeacemakerly: 'Gotham', sans-serif;
  color: white;
  font-size: 30px; /* Set the font size */
  margin-left: -65%;
  font-weight:bold;
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

  &:hover {
    transition: 0.5s;
    .title {
      padding-bottom: 50px;
      opacity: 1;
      transition: 0.5s;
      font-size: 10px;
    }
    .watch-button {
      opacity: 1;
      transition: 0.5s;
      font-size: 10px;
    }
  }

  .title {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    font-size: 26px;
    font-weight: 300;
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

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
`;

function Card() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 21; // Number of cards to display per page

  // Sample card data (contains 14 cards)
  const cardData = [
    
    {
        title: 'Stranger Things',
        imageUrl: 'https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg',
      },
      {
        title: 'Stranger Things',
        imageUrl: 'https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg',
      },
      {
        title: 'Stranger Things',
        imageUrl: 'https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg',
      },
      {
        title: 'Stranger Things',
        imageUrl: 'https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg',
      },
      {
        title: 'Stranger Things',
        imageUrl: 'https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg',
      },
      {
        title: 'Stranger Things',
        imageUrl: 'https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg',
      },
      {
        title: 'Stranger Things',
        imageUrl: 'https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg',
      },
      {
        title: 'Stranger Things',
        imageUrl: 'https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg',
      },
      {
        title: 'Stranger Things',
        imageUrl: 'https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg',
      },
      {
        title: 'Stranger Things',
        imageUrl: 'https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg',
      },
      {
        title: 'Stranger Things',
        imageUrl: 'https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg',
      },
      {
        title: 'Stranger Things',
        imageUrl: 'https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg',
      },
      {
        title: 'Stranger Things',
        imageUrl: 'https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg',
      },
      {
        title: 'Stranger Things',
        imageUrl: 'https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg',
      },
      {
        title: 'Stranger Things',
        imageUrl: 'https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg',
      },
      {
        title: 'Stranger Things',
        imageUrl: 'https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg',
      },
      {
        title: 'Stranger Things',
        imageUrl: 'https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg',
      },
      {
        title: 'Stranger Things',
        imageUrl: 'https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg',
      },
      {
        title: 'Stranger Things',
        imageUrl: 'https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg',
      },
      {
        title: 'Stranger Things',
        imageUrl: 'https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg',
      },
      {
        title: 'Stranger Things',
        imageUrl: 'https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg',
      },
      {
        title: 'Stranger Things',
        imageUrl: 'https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg',
      },
      {
        title: 'Stranger Things',
        imageUrl: 'https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg',
      },
      {
        title: 'Stranger Things',
        imageUrl: 'https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg',
      },
      {
        title: 'Stranger Things',
        imageUrl: 'https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg',
      },
      {
        title: 'Stranger Things',
        imageUrl: 'https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg',
      },
      {
        title: 'Stranger Things',
        imageUrl: 'https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg',
      },
      {
        title: 'Stranger Things',
        imageUrl: 'https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg',
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
    <div style={{height:"120vh",width:"100vw",backgroundColor:"transparent",marginTop:"-6%",marginLeft:"-2%"}}>
        <Heading>| Trending Series</Heading>
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
    </div>
  );
}

export default Card;
