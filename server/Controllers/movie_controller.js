// movieController.js
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
  
  const getMovieDetails = (req, res) => {
    const movieId = req.params.id;
    if (movieId === '1') {
      res.json(movieDetails);
    } else {
      res.status(404).json({ error: 'Movie not found' });
    }
  };
  
  module.exports = { getMovieDetails };
  