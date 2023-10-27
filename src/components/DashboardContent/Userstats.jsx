import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Define the data for the pie chart
export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

// Styled component for the App
const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
  position: relative; /* Add position relative to the container */
`;

const Heading = styled.h1`
  text-align: center;
  font-fapeacemakerly: 'Gotham', sans-serif;
  color: black;
  font-size: 40px; /* Set the font size */
  margin-left: -70%;
  font-weight:bold;
`;

// Styled component for the PieGraph div
const PieGraph = styled.div`
  position: absolute;
  top: -1200%; /* Position 10% from the top of the AppContainer */
  right: 1200%; /* Position it at the left end */
`;

// Define the main React component
export function App() {
  return (
    <AppContainer>
      <PieGraph>
        <Heading>Monthly Visitor</Heading>
        <Pie data={data} />
      </PieGraph>
    </AppContainer>
  );
}

// Export the App component as the default export
export default App;
