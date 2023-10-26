import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'; // Import styled-components

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #000;
  background-color: transparent;
  font-size: 16px;
  padding: 5px;
  margin-right: 10px;
`;

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products/search?q=${value}`
        );

        setSuggestions(data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [value]);

  return (
    <Container>
      <Input
        type="text"
        placeholder="Search data..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </Container>
  );
};

export default SearchBar;
