import React, { useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 120vh;
  background-color:gray;
`;

const VideoPlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Video = styled.video`
  width: 150%;
  height: 45%;
  margin-top:15%;
`;

const EpisodeList = styled.div`
position:sticky;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  margin-right:110%;
  flex-direction: row;
`;

const SelectWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const EpisodeItem = styled.div`
margin:20px;
color: white;
  text-align: center;
`;

const EpisodeImage = styled.img`
  max-width: 150px;;
  max-height: 150px;
   color:black;
`;

const episodes = [
  {
    season: "season1",
    episodeNumber: 1,
    link: "/player",
    imageSrc: "/images/lou.jpg",
  },
  {
    season: "season1",
    episodeNumber: 2,
    link: "/player",
    imageSrc: "/images/lou.jpg",
  },
  {
    season: "season2",
    episodeNumber: 1,
    link: "/player",
    imageSrc: "/images/lou.jpg",
  },
  {
    season: "season2",
    episodeNumber: 2,
    link: "/player",
    imageSrc: "/images/lou.jpg",
  },
  {
    season: "season3",
    episodeNumber: 1,
    link: "/player",
    imageSrc: "/images/lou.jpg",
  },
  {
    season: "season3",
    episodeNumber: 2,
    link: "/player",
    imageSrc: "/images/lou.jpg",
  },
  // Add more episodes as needed
];

function VideoPlayer({ videoSrc }) {
  const videoRef = useRef(null);
  const [selectedSeason, setSelectedSeason] = useState("season1");

  return (
    <Container>
      <VideoPlayerContainer style={{ height: "150vh" }}>
        <Video ref={videoRef} controls>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
        <EpisodeList>
          <SelectWrapper>
            <select
              value={selectedSeason}
              onChange={(e) => setSelectedSeason(e.target.value)}
              style={{marginTop:""}}
            >
              <option value="season1">Season 1</option>
              <option value="season2">Season 2</option>
              <option value="season3">Season 3</option>
              {/* Add more season options as needed */}
            </select><br/>
          </SelectWrapper>
          {episodes.map((episode, index) => {
            if (episode.season === selectedSeason) {
              return (
                <a key={index} href={episode.link}>
                  <EpisodeItem>
                    <EpisodeImage
                      src={episode.imageSrc}
                      alt={`Episode ${episode.episodeNumber}`}
                      sty
                    />
                    Episode {episode.episodeNumber}
                  </EpisodeItem>
                </a>
              );
            }
            return null;
          })}
        </EpisodeList>
      </VideoPlayerContainer>
    </Container>
  );
}

export default VideoPlayer;
