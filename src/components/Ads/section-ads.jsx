import React from 'react';
import styled from 'styled-components';

const SectionAds = () => {
  return (
    <AdsSection>
      <AdContainer>
        <AdImage src="/images/lou.jpg" alt="Ad 1" />
      </AdContainer>
      <AdContainer>
        <AdText>Check out our amazing products!</AdText>
        <AdParagraph>
          Here is a brief description of our amazing products. You can learn more about our high-quality items and how they can benefit you.
        </AdParagraph>
        <button>Visit Now</button>
      </AdContainer>
    </AdsSection>
  );
};

const AdsSection = styled.section`
  height: 50vh;
  background-color: #f0f0f0;
  padding: 20px;
  display: flex;
  justify-content: space-around;
`;

const AdContainer = styled.div`
  flex: 1;
  text-align: center;
  padding: 20px;
`;

const AdImage = styled.img`
  max-width: 100%;
  height: 40vh;
`;

const AdText = styled.p`
  margin-top: 10px;
  font-weight: bold;
`;

const AdParagraph = styled.p`
  margin-top: 10px;
`;

export default SectionAds;
