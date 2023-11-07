import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

const MovieCard = styled.div`
  width: 200px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
  }

  h3 {
    margin-top: 10px;
    font-size: 16px;
  }
`;


const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=b2d47bc45b9596fab31b362d1db590f9`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <MovieListContainer>
      {movies.map((movie) => (
        <MovieCard key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <h3>{movie.title}</h3>
        </MovieCard>
      ))}
    </MovieListContainer>
  );
};

export default MovieList;