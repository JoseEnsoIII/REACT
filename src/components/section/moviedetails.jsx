import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for layout
const Wrapper = styled.div`
  display: flex;
  font-family: Gotham, sans-serif;
  margin-top: -100px;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url("/images/lou1.jpg");
  background-size: 100% 100%;
`;

const Column = styled.div`
  padding: 20px;
  flex: 1;
`;

const Poster = styled(Column)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
  padding: 10px;
  background-color: transparent;
  flex:2;
`;

const Content = styled.div`
  text-align: left;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  margin: 0;
`;

const Information = styled.p`
  margin: 0;
`;

const Strong = styled.strong`
  margin: 0;
`;

const EpisodeList = styled(Column)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  margin-right:50px;
  border:1px solid black;
  background-color:#404757;
  max-width:250px;
  max-height: 500px;
  overflow-y: auto;
`;

const EpisodeItem = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  background-color: #AAAAAA;
  text-decoration: none;
`;

const EpisodeImage = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 10px;
`;

const PlayButton = styled.button`
  background-color: #0073e6;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

const episodes = [
  { season: 'season1', episodeNumber: 1, imageSrc: '/images/lou.jpg', link: '/player' },
  { season: 'season1', episodeNumber: 2, imageSrc: '/images/lou.jpg', link: '/player' },
  { season: 'season2', episodeNumber: 1, imageSrc: '/images/lou.jpg', link: '/player' },
  { season: 'season2', episodeNumber: 2, imageSrc: '/images/lou.jpg', link: '/player' },
  { season: 'season2', episodeNumber: 3, imageSrc: '/images/lou.jpg', link: '/player' },
  { season: 'season3', episodeNumber: 1, imageSrc: '/images/lou.jpg', link: '/player' },
  { season: 'season3', episodeNumber: 2, imageSrc: '/images/lou.jpg', link: '/player' },
  { season: 'season3', episodeNumber: 3, imageSrc: '/images/lou.jpg', link: '/player' },
  // Add more episode data as needed
];

const MovieDetails = () => {
  const [selectedSeason, setSelectedSeason] = useState('season1');

  const text = `HD Trailer | IMDB | 1:20:60
    Overview: At America's only college for superheroes, gifted students put their moral boundaries to the test, competing for the university's top ranking, and a chance to join The Seven, Vought International's elite superhero team. When the school's dark secrets come to light, they must decide what kind of heroes they want to become.
    Released: 2023-09-28
    Genre: Sci-Fi & Fantasy, Action & Adventure, Comedy, Drama
    Casts: Jaz Sinclair, Chance Perdomo, Lizze Broadway, Shelley Conn, Maddie Phillips
    Duration: 50 min
    Country: United States of America
    Production: Sony Pictures Television Studios, Amazon Studios, Kripke Enterprises, Point Grey Pictures, Original Film, Sony Pictures Television`;

    const Overview = styled.p`
    font-weight: bold;
    margin: 0;
  `;
  
  const Released = styled.p`
    font-weight: bold;
    margin: 0;
  `;
  
  const Genre = styled.p`
    font-weight: bold;
    margin: 0;
  `;
  
  const Casts = styled.p`
    font-weight: bold;
    margin: 0;
  `;
  
  const Duration = styled.p`
    font-weight: bold;
    margin: 0;
  `;
  
  const Country = styled.p`
    font-weight: bold;
    margin: 0;
  `;
  
  const Production = styled.p`
    font-weight: bold;
    margin: 0;
  `;
  const lines = text.split('\n');

  return (
    <section style={{backgroundColor:"#404757"}}>
      <Wrapper>
        {/* Movie Poster */}
        <Poster>
          <img
            style={{ height: "300px", width: "200px" }}
            src="/images/lou.jpg"
            alt="Movie Poster"
          />
        </Poster>

        {/* Movie Details */}
        <DetailsContainer>
  <Title>
    <Strong>Expend4bles</Strong>
  </Title>
  <Content>
    {lines.map((line, index) => {
      const parts = line.split(':');
      if (parts.length === 2) {
        const label = parts[0].trim();
        const value = parts[1].trim();
        if (label === 'HD Trailer') {
          return (
            <div key={index}>
              <a href={value} target="_blank" rel="noopener noreferrer">
                <button>{label}</button>
              </a>
            </div>
          );
        }
        return (
          <div key={index}>
            {label === 'Overview' && <Overview>{label}:</Overview>}
            {label === 'Released' && <Released>{label}:</Released>}
            {label === 'Genre' && <Genre>{label}:</Genre>}
            {label === 'Casts' && <Casts>{label}:</Casts>}
            {label === 'Duration' && <Duration>{label}:</Duration>}
            {label === 'Country' && <Country>{label}:</Country>}
            {label === 'Production' && <Production>{label}:</Production>}
            {label !== 'HD Trailer' && label !== 'Overview' && label !== 'Released' && label !== 'Genre' && label !== 'Casts' && label !== 'Duration' && label !== 'Country' && label !== 'Production' && <Information>{label}:</Information>}
            {value}
          </div>
        );
      } else {
        return <Information key={index}>{line}</Information>;
      }
    })}
  </Content>
  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
  <div>
    <a href="link_to_download" target="_blank" rel="noopener noreferrer">
      <button style={{ border: "2px solid blue", margin: "0 10px", borderRadius: "25px" }}>Download</button>
    </a>
  </div>
  <div>
    <a href="link_to_buy_ticket" target="_blank" rel="noopener noreferrer">
      <button style={{ border: "2px solid blue", margin: "0 10px", borderRadius: "25px" }}>Buy Ticket</button>
    </a>
  </div>
  <div>
    <button style={{ border: "2px solid blue", margin: "0 10px", borderRadius: "25px" }}>Share</button>
  </div>
</div>

</DetailsContainer>


        <EpisodeList>
          <select
            value={selectedSeason}
            onChange={(e) => setSelectedSeason(e.target.value)}
          >
            <option value="season1">Season 1</option>
            <option value="season2">Season 2</option>
            <option value="season3">Season 3</option>
            {/* Add more season options as needed */}
          </select>
          {episodes.map((episode, index) => {
            if (episode.season === selectedSeason) {
              return (
                <a key={index} href={episode.link}>
                  <EpisodeItem>
                    <EpisodeImage src={episode.imageSrc} alt={`Episode ${episode.episodeNumber}`} />
                    Episode {episode.episodeNumber}
                    
                  </EpisodeItem>
                </a>
              );
            }
            return null;
          })}
        </EpisodeList>
      </Wrapper>
    </section>
  );
};

export default MovieDetails;
