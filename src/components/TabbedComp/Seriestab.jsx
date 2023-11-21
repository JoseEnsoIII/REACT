import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

export const sizes = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;      
  height: 120%;
  justify-content: space-around;
  padding: 20px;
  background-color: transparent;
  margin-top: -8%;

  @media (max-width: ${sizes.sm}) {
    justify-content: center;
  }

  @media (min-width: ${sizes.md}) {
    justify-content: space-between;
  }
`;

const MovieCard = styled.div`
  width: 130px;
  height:auto;
  margin: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
  }

  .details {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    padding: 10px;
    color: white;
  }

  h3 {
    margin: 0;
    font-size: 16px;
    text-align: center;
  }

  .score {
    background-color: rgba(255, 255, 255, 0.7);
    color: black;
    padding: 5px 8px;
    border-radius: 4px;
    font-weight: bold;
    text-align: center;
  }

  .additional-info {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }

  .star-icon {
    color: gold;
  }
`;

const Heading = styled.div`
  width: 100%;
  margin: 20px 10% 20px 0;
  font-family: 'Gotham', sans-serif;
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  margin: 0 10px;
  cursor: pointer;
  color: white;

  &:disabled {
    color: #777;
    cursor: not-allowed;
  }
`;

const PaginationInfo = styled.span`
  color: white;
  font-size: 16px;
  margin: 0 10px;
`;

const Button = styled.button`
  background-color: transparent;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: red;
  }
`;

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const cardsPerPage = 18;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = 'b2d47bc45b9596fab31b362d1db590f9';
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}&page=${currentPage}`
        );
        const data = await response.json();
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [currentPage]);

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    const lastPage = Math.ceil(movies.length / cardsPerPage);
  
    if (nextPage <= lastPage) {
      setCurrentPage(nextPage);
    }
  };
  

  const handlePrevPage = () => {
    const prevPage = currentPage - 1;
  
    if (prevPage >= 1) {
      setCurrentPage(prevPage);
    }
  };
  

  return (
    <Container>
      <Heading>| Trending Tv Shows</Heading>
      {movies.map((movie) => (
        <MovieCard key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
           
            <div className="details">
              <div className="score">
              <FaStar className="star-icon" />
              {movie.vote_average}
            </div>
            <h3>{movie.title}</h3>
           
            <Button>Play</Button>
          </div>
        </MovieCard>
      ))}
      <Pagination>
        <PaginationButton onClick={handlePrevPage} disabled={currentPage === 1}>
          <BiChevronLeft />
        </PaginationButton>
        <PaginationInfo>Page {currentPage} of {totalPages}</PaginationInfo>
        <PaginationButton onClick={handleNextPage} disabled={currentPage === totalPages}>
          <BiChevronRight />
        </PaginationButton>
      </Pagination>
    </Container>
  );
};

export default PopularMovies;
