import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns in a row */
  gap: 8px; /* Adjust spacing as needed */
  justify-content: center;
  margin: 100px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns in a row for smaller screens */
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr); /* 1 column for even smaller screens */
  }
`;

const GridItem = styled.div`
  grid-column: span ${({ xs }) => xs};

  @media (min-width: 600px) {
    grid-column: span ${({ sm }) => sm};
  }

  @media (min-width: 960px) {
    grid-column: span ${({ md }) => md};
  }
`;

const Item = styled.div`
  border: 1px solid #fff;
  padding: 20px; /* Adjust padding as needed */
  background-color: #fff;
  width: 210px; /* Take up full width of grid cell */
  margin: 10px;

  @media (max-width: 400px) {
    width: 100%; /* Full width for smaller screens */
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const CenteredTitle = styled.h1`
  grid-column: span 4; /* Make the title span all columns */
  text-align: left; /* Center align the title */
  color: white;
  margin-bottom: 24px; /* Add some space below the title */
`;

const MyComponent = () => {
  return (
    <GridContainer>
      <CenteredTitle>Movies</CenteredTitle>
      {Array.from(Array(20)).map((_, index) => (
        <GridItem xs={1} sm={1} md={1} key={index}>
          <Item>
            <Image src="/images/th.jpg" alt="Your Image" />
            {`Movie ${index + 1}`}
            <p>This is a paragraph element.</p>
          </Item>
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default MyComponent;
