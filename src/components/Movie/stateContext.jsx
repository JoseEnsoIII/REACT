// stateContext.js
import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

const StateContext = ({ children }) => {
  const baseImageUrl = 'https://image.tmdb.org/t/p/original';
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

  // Define the state and functions, including handleFormSubmit
  const [query, setQuery] = useState('');
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic here
  };

  return (
    <Context.Provider
      value={{
        baseImageUrl,
        apiUrl,
        apiKey,
        query,
        handleInputChange,
        handleFormSubmit, // Make sure it's included
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
