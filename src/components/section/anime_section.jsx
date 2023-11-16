import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';

const Heading = styled.h1`
  text-align: center;
  font-family: 'Gotham', sans-serif;
  color: white;
  font-size: 30px;
  margin-left: -80%;
  margin-top:8%;
  font-weight: bold;

  @media (max-width: 320px) {
    // Styles for screens up to 320px width
    margin-left: -30%;
    font-size: 15px;
    margin-top: 20%;
    
  }

  @media (max-width: 640px) {
    margin-left: -60%;
    font-weight: bold;
    font-size: 20px;
    margin-top: 15%;
  }
  @media (max-width: 400px) {
    // Styles for screens up to 400px width
    font-size: 15px;
    margin-top:15%;
  }
  @media  (max-width: 640px) {
    // Styles for screens between 641px and 768px width
    font-size: 30px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    // Styles for screens between 641px and 768px width
    font-size: 30px;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    // Styles for screens between 769px and 992px width
    font-size: 28px;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    // Styles for screens between 993px and 1200px width
    font-size: 30px;
  }
`;

const CardWrapper = styled.div`
  position: relative;
  width: 180px;
  height: 250px;
  background: url(${(props) => props.imageUrl}) no-repeat center/cover;
  border-radius: 10px;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
  margin: 10px 10px -40px 10px; /* Updated margin to include only top and left/right margins */
  transition: 0.5s;

  @media (max-width: 1200px) {
    width: 120px;
    height: 150px;
    margin: 10px;
  }

  @media (max-width: 992px) {
    width: 120px;
    height: 150px;
    margin: 8px;
    margin:10px 10px -15px 10px;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 150px;
    margin: 6px;
    margin: 5px 5px -35px 5px;
  }
  @media (max-width: 640px) {
    width: 120px;
    height: 150px;
    margin: 6px;
    margin: 5px 5px -150px 5px;
  }
  @media (max-width: 520px) {
    width: 120px;
    height: 150px;
    margin: 5px 5px -85px 5px;
  }
  @media (max-width: 400px) {
    width: 120px;
    height: 150px;
    margin: 5px 5px -55px 5px;
  }

  @media (max-width: 320px) {
    width: 120px;
    height: 150px;
    margin: 5px 5px -55px 5px;
  }

  &:hover {
    transition: 1s;
    .title {
      padding-bottom: 50px;
      opacity: 1;
      transition: 0.3s;
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

  @media (max-width: 640px) {
    font-size: 10px; /* Add this line to change the font size to 10px on smaller screens */
  }
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
  width: 100%;
  
  @media (max-width: 320px) {
    height: 50vh; 
    margin-top:-40%
  }

  @media (max-width: 400px) {
    height: 60vh; 
    width:auto;
  }
  @media (max-width: 520px) {
    height: 60vh; 
    width:auto;
  }
  @media (max-width: 640px) {
    height: 50vh; /* Set height to 50% of the viewport height for screens up to 640px width */
  }

  @media (min-width: 641px) and (max-width: 768px) {
    width: 80%;
    height: auto; /* Set height to auto for screens between 641px and 768px width */
  }

  @media (min-width: 769px) and (max-width: 992px) {
    width: 70%;
    height: auto; 
    margin-top:10%;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    width: 60%;
    height: auto; /* Set height to auto for screens between 993px and 1200px width */
  }

  @media (min-width: 1201px) {
    height: 120vh; /* Set height to 120% of the viewport height for screens larger than 1200px width */
  }
`;



const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -5%;

  @media (max-width: 320px) {
    margin-top: -85%;
  }
  @media (min-width: 319px)and (max-width: 400px) {
    margin-top: -55%;
  }
 
  @media (min-width: 401px) and (max-width: 640px) {
    margin-top: -45%;
  }

  @media (min-width: 641px) and (max-width: 768px) {
    margin-top: -25%;
  }

  @media (min-width: 769px) and (max-width: 998px) {
    margin-top: -15%;
  }

  @media (min-width: 999px) and (max-width: 1200px) {
    margin-top: -15%;
  }
`;




const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -5%; /* Set initial margin-top to 5% */

  @media (max-width: 320px) {
    margin-top: 5%; /* Styles for screens up to 320px width */
  }

  @media (min-width: 321px) and (max-width: 400px) {
    margin-top: 5%; /* Styles for screens between 321px and 400px width */
  }

  @media (min-width: 401px) and (max-width: 640px) {
    margin-top: 5%; /* Styles for screens between 401px and 640px width */
  }

  @media (min-width: 641px) and (max-width: 768px) {
    margin-top: 5%; /* Styles for screens between 641px and 768px width */
  }

  @media (min-width: 769px) and (max-width: 992px) {
    margin-top: 5%; /* Styles for screens between 769px and 992px width */
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    margin-top: 5%; /* Styles for screens between 993px and 1200px width */
  }

  @media (min-width: 1201px) {
    margin-top: 5%; /* Styles for screens larger than 1200px width */
  }
`;


const PageButton = styled.button`
  background-color: white;
  border: 1px solid white;
  color: black;
  cursor: pointer;
  margin-top:5%;
  font-size: 18px;
  font-family: "Gotham", sans-serif;
  padding: 3px 10px;
  border-radius: 5px;
  outline: none;
  height: 20px;
  
  &:hover {
    background-color: transparent;
    color: blue;
  }

  @media (max-width: 640px) {
    font-size: 13px;
    height: 45px;
  }
  @media (max-width: 320px) {
    font-size: 10px;
    height: 20px;
    margin:3px;
  }
  @media (max-width: 400px) {
    font-size: 10px;
    height: 20px;
    margin:3px;
  }
  @media (max-width: 520px) {
    font-size: 10px;
    height: 20px;
    margin:3px;
  }

  @media (min-width: 401px) and (max-width: 768px) {
    font-size: 14px;
    height: 40px;
    margin:3px;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 16px;
    height: 50px;
    margin:3px;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 20px;
    height: 60px;
    margin:3px;
  }

  @media (min-width: 1201px) {
    font-size: 22px;
    height: 70px;
    margin:3px;
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
  const [movies, setMovies] = useState([]); // State for storing movie data
  const [cardsPerPage, setCardsPerPage] = useState(16);

  useEffect(() => {
    const updateCardsPerPage = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 320) {
        setCardsPerPage(8); // Update with the desired value for screens less than 320px
      } else if (screenWidth < 400) {
        setCardsPerPage(12); // Update with the desired value for screens between 320px and 399px
      }  else if (screenWidth < 520) {
          setCardsPerPage(9);
      } else if (screenWidth < 640) {
        setCardsPerPage(12);
      } else if (screenWidth < 768) {
        setCardsPerPage(25); // Update with the desired value for screens between 400px and 767px
      } else if (screenWidth < 992) {
        setCardsPerPage(25); // Update with the desired value for screens between 768px and 991px
      } else if (screenWidth < 1200) {
        setCardsPerPage(20); // Update with the desired value for screens between 992px and 1199px
      } else {
        setCardsPerPage(24); // Update with the desired value for screens 1200px and above
      }
    };

    // Initial update
    updateCardsPerPage();

    // Update on window resize
    window.addEventListener('resize', updateCardsPerPage);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateCardsPerPage);
    };
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/on_the_air?api_key=b2d47bc45b9596fab31b362d1db590f9`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []); // Fetch movies when the component mounts

 // Modify the cardData to use the movies data
const cardData = movies.map((movie) => ({
  title: movie.title,
  imageUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
  url: `#`, // Update with the correct URL for each movie
})) || [];


  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const displayedCards = cardData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container style={{ height: "180vh", width: "100vw", backgroundColor: "black", marginTop: "-40px" }}>
      <Heading>| New Anime </Heading>
      <FlexContainer>
        {displayedCards.map((card, index) => (
          <a key={index} href={card.url}>
            <CardWrapper imageUrl={card.imageUrl}>
              <div className="title">{card.title}</div>
              <button className="watch-button">
                <FaPlay className="play-icon" /> Watch
              </button>
            </CardWrapper>
          </a>
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
