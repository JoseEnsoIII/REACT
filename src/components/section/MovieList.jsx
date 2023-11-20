import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const MovieCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: white;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;
`;
const Button = styled(Link)`
  background-color: #3498db;
  color: black;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;
  text-decoration: none; 
  margin-top: auto;

  &:hover {
    background-color: #2980b9;
  }
`;
const Heading1 = styled.h1`
  color: #3498db;
  font-size: 2em;
  margin-bottom: 20px;
  text-align: center;
`;
const Score = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  color: black;
  padding: 5px 8px;
  border-radius: 4px;
  position: absolute;
  top: 10px;
  right: 10px;
  font-weight: bold;
`;
const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/top_rated',
          {
            params: {
              api_key: 'b2d47bc45b9596fab31b362d1db590f9',
            },
          }
        );

        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
    <Heading1>Top Rated Movies</Heading1>
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          backgroundImage={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        >
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <Score>{movie.vote_average}</Score>
          <Button to={`/movie/${movie.id}`}>Watch</Button>
        </MovieCard>
      ))}
    </div>
  </Container>
  );
};

export default MovieList;