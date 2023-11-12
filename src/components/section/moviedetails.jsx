import React, { useState , useEffect} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

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




const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch('http://localhost:3003/api/movie/1'); // Replace '1' with the actual movie ID
        if (response.ok) {
          const data = await response.json();
          setMovieDetails(data);
        } else {
          console.error('Failed to fetch movie details');
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    };

    fetchMovieDetails();
  }, []);


  const text = `HD | IMDB | 1:20:60
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
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img
              style={{ height: "300px", width: "200px" }}
              src="/images/lou.jpg"
              alt="Movie Poster"
            />
             <p style={{ marginTop: "10px" }}>
      <a href="" style={{ color: "white", textDecoration: "none" }}>
        <FontAwesomeIcon icon={faPlayCircle} style={{marginRight:"10px"}}/>Watch Trailer 
      </a>
    </p>
          </div>
        </Poster>

        {/* Movie Details */}
        <DetailsContainer>
        <div className="column column-md">
      <h1 id="title">My Neighbor Totoro<span id="date"> (1988)</span></h1>
      <div className="row">
        <span className="badge"><span id="status">Released</span></span>
      </div>
      <div className="row">
        1 hour 26 minutes | Fantasy, Animation, Family | 16 April 1988
      </div>
      <h3 id="tagline">These strange creatures still exist in Japan. Probably.</h3>
      <div id="overview">
        <p id="synopsis">Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.</p>
      </div>
      <div className="row">
        <h2>Company Credits</h2>
        <div id="companies">Studio Ghibli, Nibariki, Tokuma Japan Communications Co. Ltd.</div>
      </div>
      <div className="row">
        <h2>Countries</h2>
        <div id="countries">Japan</div>
      </div>
      <div className="row">
        <h2>Box Office</h2>
        <div id="budget"><strong>Budget:</strong> $0</div>
        <div id="revenue"><strong>Revenue:</strong> $0</div>
      </div>
      <div className="row">
        <div className="column column-md">
          <div className="ratings">
            <h2>Rating</h2>
            <span id="rating">8/10</span>
          </div>
        </div>
        <div className="column column-md">
          <h2>Runtime</h2>
          <div>
            <div id="runtime">86 minutes</div>
          </div>
        </div>
        <div className="column column-lg">
          <h2>Related</h2>
          <ul id="related">

          </ul>
        </div>
      </div>
    </div>

</DetailsContainer>


        
      </Wrapper>
    </section>
  );
};

export default MovieDetails;
