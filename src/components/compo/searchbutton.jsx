import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import styled from 'styled-components';

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjust this value based on your layout */
`;

const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  height: 50px;
  width: 800px;
`;

const SearchInput = styled.input`
padding: 15px;
  flex: 1;
  border: none;
  outline: none;
`;

const BlueSearchIcon = styled(AiOutlineSearch)`
  background-color:#191970;
  color: white;
  padding:5px;
  border-radius: 0%;
  cursor: pointer;
  height: 40px;
  width: 50px;

`;

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <CenteredContainer>
      <StyledSearchBar>
        <SearchInput
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <BlueSearchIcon className="search-icon" />
      </StyledSearchBar>
    </CenteredContainer>
  );
};

export default SearchBar;
