import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

// Define a styled container for centering
const CenteredVideoPlayerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 550px; /* Optional: Center vertically within the viewport */
  background-color: #000; /* Gray background color */
`;

const VideoPlayer = ({ videoUrl }) => {
  return (
    <CenteredVideoPlayerContainer>
      <ReactPlayer
        url={videoUrl}
        controls={true} // Display player controls (play, pause, volume, etc.)
        width="80%"
        height="100%"
      />
    </CenteredVideoPlayerContainer>
  );
};

export default VideoPlayer;
