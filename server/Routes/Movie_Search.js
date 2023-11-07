const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// Define the Movie DB API base URL and your API key
const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = 'b2d47bc45b9596fab31b362d1db590f9'; // Replace with your actual API key

// Define a route to fetch movie details by ID
router.get('/movie/:movie_id', async (req, res) => {
  const movieId = req.params.movie_id;
  const url = `${baseUrl}/movie/${movieId}?language=en-US&api_key=${apiKey}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    });

    if (response.ok) {
      const movieData = await response.json();
      res.json(movieData);
    } else {
      const errorData = await response.json();
      res.status(response.status).json(errorData);
    }
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});

module.exports = router;
