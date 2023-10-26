import React from 'react';
import styled from 'styled-components';

const ParallaxSection = styled.div`
  background-image: url('${(props) => props.imageUrl || '/images/meg2.jpg'}');
  background-size: cover;
  background-position: center;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;


const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
`;

const Parallax = () => {
  return (
    <ParallaxSection>
      <ContentContainer>
        <h1>Your Content Goes Here</h1>
        <p>More content here...</p>
      </ContentContainer>
    </ParallaxSection>
  );
};

export default Parallax;
