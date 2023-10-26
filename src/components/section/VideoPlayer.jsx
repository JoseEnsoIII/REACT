import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const StyledVideoPlayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
  padding: 50px;

  video {
    width: 90%;
    height: 60%;
    margin: 5px 0;
  }

  button {
    background: none;
    border: none;
    font-size: 24px;
    color: #0077b6;
    cursor: pointer;
    margin: 10px 0;
  }

  input {
    width: 50%;
  }
`;
const MovieTitle = styled.div`
  background-color: white;
  font-family: 'Gotham', sans-serif;
  font-size: 50px;
  margin-right: 75%;
   /* Adjust the width as needed */
`;


function VideoPlayer({ videoSrc }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const adjustVolume = (e) => {
    const newVolume = e.target.value;
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  return (
    <StyledVideoPlayer>
        <MovieTitle>Movie Title</MovieTitle>
      <video ref={videoRef} controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div>
        <button onClick={togglePlay}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <button onClick={toggleMute}>
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>

        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={adjustVolume}
        />
      </div>
    </StyledVideoPlayer>
  );
}

export default VideoPlayer;
