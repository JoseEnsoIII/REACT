import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaTelegram, FaLinkedin } from 'react-icons/fa';

const facebookUrl = 'https://www.facebook.com/';
const twitterUrl = 'https://twitter.com/';
const instagramUrl = 'https://www.instagram.com/';
const linkedinUrl = 'https://www.linkedin.com/';

// Define responsive sizes
const sizes = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Define styled components
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  background-color:WHITE;
`;

const Column = styled.div`
  flex: 1;
  min-width: 250px;
  margin: 10px;

  h2,
  h3 {
    color: #333;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #666;
  }
`;

const SocialMediaList = styled.div`
  display: flex;
  gap: 10px;
`;

const SocialMediaItem = styled.div`
  font-size: 24px;
  color: #333;

  a {
    color: #333;
  }
`;

// Your component
const ResponsiveFooter = styled.div`
  @media (max-width: ${sizes.sm}) {
    ${Container} {
      flex-direction: column;
    }
  }

  @media (min-width: ${sizes.sm}) and (max-width: ${sizes.md}) {
    ${Column} {
      flex-basis: 45%;
    }
  }

  @media (min-width: ${sizes.md}) and (max-width: ${sizes.lg}) {
    ${Column} {
      flex-basis: 30%;
    }
  }

  @media (min-width: ${sizes.lg}) {
    ${Column} {
      flex-basis: 20%;
    }
  }
`;

// Example usage
const YourComponent = () => {
  return (
    <ResponsiveFooter>
       <Container>
      <Column>
        <h2>
          <strong>ReactFlix</strong>
        </h2>
        <p>
          is a Free Movies streaming app with zero
          ads. We let you watch movies online without having to register or pay,
          with over 10,000 movies and TV-Series. You can also download full
          movies from MoviesCloud and watch them later if you want
        </p>
      </Column>
      <Column>
        <h3>
          <strong>ABOUT</strong>
        </h3>
        <ul>
          <li>
            <a href="/about">About ReactFlix</a>
          </li>
          <li>
            <a href="/term">Terms & Conditions</a>
          </li>
          <li>
            <a href="/legal">Legal</a>
          </li>
          <li>
            <a href="/contact">Contact us</a>
          </li>
          <li>
            <a href="/faq">FAQs</a>
          </li>
        </ul>
      </Column>

      <Column>
        <h3>
          <strong>SOCIAL MEDIA</strong>
        </h3>
        <SocialMediaList>
          <SocialMediaItem>
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </SocialMediaItem>
          <SocialMediaItem>
            <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </SocialMediaItem>
          <SocialMediaItem>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <FaTelegram />
            </a>
          </SocialMediaItem>
          <SocialMediaItem>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </SocialMediaItem>
        </SocialMediaList>
      </Column>
    </Container> 
    </ResponsiveFooter>
  );
};

export default YourComponent;
