
import React from 'react';
import { BiSearch } from 'react-icons/bi';
import menu from '/images/OIP.jpg';
import logo from '/images/OIP.jpg';
import { useStateContext } from '../Movie/stateContext';
import { Link, Form } from 'react-router-dom';

function Navbar() {
  const { handleFormSubmit , query, handleInputChange } = useStateContext();

  return (
    <div className="flex flex-col sm:flex-row w-full justify-center sm:justify-around gap-4 items-center z-20 absolute top-10" data-testid="navbar">
          <Link to={"/"} className='flex items-center' data-testid="logo-link">
              <img src={logo} alt="logo icon" data-testid="logo-img" />
          </Link>
          <Form onSubmit={handleFormSubmit } className="flex w-3/5 sm:w-2/5 h-4 items-center border-white border-2 p-4 rounded-lg shadow-md" data-testid="search-bar">
            <input
              type="text"
              placeholder="What do you want to watch?"
              value={query}
              onChange={handleInputChange}
              className="w-full placeholder-white bg-transparent border-none outline-0 text-sm text-white sm:text-lg"
              data-testid="search-input"
            />
            <BiSearch className="text-white font-bold" data-testid="search-icon" />
    </Form>
    <div className="flex items-center" data-testid="menu-icon">
      <img src={menu} alt="menu icon" />
    </div>
  </div>
  );
}

export default Navbar;