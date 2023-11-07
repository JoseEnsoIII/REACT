import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    // TODO: Implement search functionality
  };

  return (
    <nav>
      <h1 className="navbar-title">
        <Link to="/">Movie Streaming App</Link>
      </h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Search;