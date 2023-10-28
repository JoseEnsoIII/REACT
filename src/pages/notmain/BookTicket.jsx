import React, { useState } from 'react';
import Navbar from '../../components/Header/navbar';
import Footer from '../../components/Footer/footer';
import styled from 'styled-components';
import Ads from "../../components/Ads/bottom-ads";
import PopUpAds from "../../components/Ads/popup-ads";

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
  border: 1px solid white;
  color: white;
  padding: 20px;
`;

const CinemaTicketPurchase = () => {
  const [selectedMovie, setSelectedMovie] = useState('');
  const [ticketCount, setTicketCount] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  
  const movies = [
    'Movie 1',
    'Movie 2',
    'Movie 3',
  ];

  const handleMovieChange = (event) => {
    setSelectedMovie(event.target.value);
  };

  const handleTicketCountChange = (event) => {
    setTicketCount(Number(event.target.value));
  };

  const calculateTotalPrice = () => {
    // Replace this with your ticket price calculation logic
    const ticketPrice = 10; // Replace with your actual ticket price
    return ticketCount * ticketPrice;
  };

  const purchaseTicket = () => {
    // Replace this with your ticket purchase logic
    // You can send the selectedMovie and ticketCount to a server for processing
    alert(`Ticket purchased for ${selectedMovie} x ${ticketCount} for a total of $${calculateTotalPrice()}.`);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <CenteredContainer>
      <Navbar />
      <h1>Cinema Ticket Purchase</h1>
      <label>
        Search for a movie:
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
      </label>
      <br />
      <label>
        Select a movie:
        <select value={selectedMovie} onChange={handleMovieChange}>
          <option value="">Select a movie</option>
          {filteredMovies.map((movie, index) => (
            <option key={index} value={movie}>
              {movie}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Number of tickets:
        <input
          type="number"
          value={ticketCount}
          onChange={handleTicketCountChange}
          min={1}
        />
      </label>
      <br />
      <p>Total Price: ${calculateTotalPrice()}</p>
      <button onClick={purchaseTicket}>Purchase Ticket</button>
      <PopUpAds />
      <Ads />
      <Footer />
    </CenteredContainer>
  );
};

export default CinemaTicketPurchase;
