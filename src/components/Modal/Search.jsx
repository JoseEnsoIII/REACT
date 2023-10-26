import React, { useState } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  // ... (existing styles)
`;

const ModalContent = styled.div`
  // ... (existing styles)
`;

const CloseButton = styled.span`
  // ... (existing styles)
`;

const SearchInput = styled.input`
  // ... (existing styles)
`;

const SearchButton = styled.button`
  // ... (existing styles)
`;

const SelectFilter = styled.select`
  width: 80%;
  padding: 10px;
  margin: 10px 0;
`;

const SearchModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedContentType, setSelectedContentType] = useState('');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Searching for:', {
      genre: selectedGenre,
      year: selectedYear,
      country: selectedCountry,
      contentType: selectedContentType,
    });
  };

  return (
    <div>
      <button onClick={openModal}>Open Search</button>
      <ModalOverlay isOpen={isOpen}>
        <ModalContent>
          <CloseButton onClick={closeModal}>&times;</CloseButton>
          <SelectFilter
            onChange={(e) => setSelectedGenre(e.target.value)}
            value={selectedGenre}
          >
            <option value="">Select Genre</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            {/* Add more genre options */}
          </SelectFilter>
          <SelectFilter
            onChange={(e) => setSelectedYear(e.target.value)}
            value={selectedYear}
          >
            <option value="">Select Year</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            {/* Add more year options */}
          </SelectFilter>
          <SelectFilter
            onChange={(e) => setSelectedCountry(e.target.value)}
            value={selectedCountry}
          >
            <option value="">Select Country</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            {/* Add more country options */}
          </SelectFilter>
          <SelectFilter
            onChange={(e) => setSelectedContentType(e.target.value)}
            value={selectedContentType}
          >
            <option value="">Select Content Type</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
            <option value="anime">Anime</option>
          </SelectFilter>
          <SearchInput placeholder="Search..." />
          <SearchButton onClick={handleSearch}>Search</SearchButton>
        </ModalContent>
      </ModalOverlay>
    </div>
  );
};

export default SearchModal;
