import React, { useState } from "react";
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  font-size:16px;
`;

const DropdownButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
`;

const DropdownContent = styled.ul`
  display: ${props => (props.isOpen ? "block" : "none")};
  position: absolute;
  top: 100%;
  font-size:16px;
  left: 0;
  background-color: #191970;
  list-style: none;
  padding: 10px;
  z-index: 1;
`;

const DropdownItem = styled.li`
  margin: 5px 0;
`;

const Dropdown = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <DropdownContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <DropdownButton>
        {label}
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>
        {items.map((item, index) => (
          <DropdownItem key={index}>{item}</DropdownItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown;
