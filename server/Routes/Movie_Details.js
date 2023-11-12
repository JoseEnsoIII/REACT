const express = require('express');
const router = express.Router();
const db = require('../Database/db');
router.get('/api/movie/:id', movieController.getMovieDetails);


const movieDetails = {
    title: 'Example Movie',
    releaseDate: '2023-01-01',
    genres: ['Action', 'Adventure'],
    casts: ['Actor1', 'Actor2'],
    duration: '120 min',
    country: 'United States',
    hdRating: 'HD',
    camRating: 'IMDB',
  };
  
  // Define a route to get movie details
  router.get('/api/movie/:id', (req, res) => {
    // Simulating fetching movie details from a database or external API
    // In a real-world scenario, you would fetch details based on the provided movie ID
    const movieId = req.params.id;
    if (movieId === '1') {
      res.json(movieDetails);
    } else {
      res.status(404).json({ error: 'Movie not found' });
    }
  });

module.exports = router;
