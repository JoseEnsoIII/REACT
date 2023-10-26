import React, { useState } from 'react';
import styled from 'styled-components';
import SpeechBubble from './speechbubble';

const HandWrapper = styled.div`
  position: fixed;
  top:12%;
  right: 1%;
  font-size: 10px;
  z-index: 999; /* Adjust the z-index to make sure it's on top of other content */
  /* Add other styling properties like width, height, etc. */

  /* Add a simple CSS animation */
  animation: wave 1s infinite alternate;
  @keyframes wave {
    0% {
      transform: rotate(-10deg);
    }
    50% {
      transform: rotate(5deg);
    }
    100% {
      transform: rotate(10deg);
    }
  }
`;

const TextWrapper = styled.div`
  position: fixed;
  top: 20px; 
  top: 10px;
  right: 0; 
  color: white;
`;

function Hand() {
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);
  const script = "Hello! I'm your friendly hand.";

  const handleClick = () => {
    setShowSpeechBubble(!showSpeechBubble);
    if (!showSpeechBubble) {
      // Call a function to trigger speech synthesis
      speakScript(script);
    }
  };

  return (
    <>
      <HandWrapper onClick={handleClick}>
        {showSpeechBubble && <SpeechBubble script={script} />}
        <img src="/images/hand.png" alt="Waving hand" style={{ width: '30px', height: '30px' }} />
      </HandWrapper>
      <TextWrapper>
        <p>Hello!</p>
      </TextWrapper>
    </>
  );
}

export default Hand;
