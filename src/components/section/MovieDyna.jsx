import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();

  // Fetch movie details using id and display them

  return (
    <div>
      <h1>Movie Details</h1>
      <p>Movie ID: {id}</p>
      {/* Display other movie details here */}
    </div>
  );
};

export default MovieDetails;
