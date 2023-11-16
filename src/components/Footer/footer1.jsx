import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center the columns horizontally */

  @media (min-width: sm) {
    padding: 20px;
  }

  @media (min-width: md) {
    padding: 30px;
  }
`;

const FooterColumn = styled.div`
  flex: 1;
  flex-basis: calc(25% - 20px); /* Divide equally into 4 columns with spacing */
  margin: 10px;

  @media (min-width: sm) {
    flex-basis: calc(25% - 30px);
    margin: 15px;
  }

  @media (min-width: md) {
    flex-basis: calc(25% - 40px);
    margin: 20px;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: 30%;
  flex-direction: column;
`;

const FooterLink = styled.li`
  margin: 2px 0;
  transition: color 0.3s;
  &:hover {
    color: blue;
  }
`;

const SocialLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-direction: column;
`;

const SocialLink = styled.li`
  margin: 2px 0;
  transition: color 0.3s;
  &:hover {
    color: blue;
  }
`;

const FooterText = styled.p`
  color: #fff;
  margin: 10px auto;
  text-align: center;
  font-family: 'Gotham', sans-serif; /* Use the Gotham font */
`;

const Heading = styled.h2`
  font-family: 'Gotham', sans-serif; /* Use the Gotham font */
  font-size: 24px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        <strong>ReactFlix</strong> is a Free Movies streaming app with zero ads. We let you watch movies online without having to register or pay, with over 10,000 movies and TV-Series. You can also download full movies from MoviesCloud and watch them later if you want.
      </FooterText>
      <FooterColumn>
        <FooterLinks>
          <FooterLink><Heading>About Us</Heading></FooterLink>
          <FooterLink to="/term">Terms of Service</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
          <FooterLink to="/sitemap">Sitemap</FooterLink>
        </FooterLinks>
      </FooterColumn>
      <FooterColumn>
        <FooterLinks>
          <FooterLink href="/movie"><Heading>Movies</Heading></FooterLink>
          <FooterLink href="/series">TV Series</FooterLink>
          <FooterLink href="/anime">Anime</FooterLink>
          <FooterLink href="#">Top IMDb</FooterLink>
        </FooterLinks>
      </FooterColumn>
      <FooterColumn>
        <FooterLinks>
          <FooterLink href="#"><Heading>Genre</Heading></FooterLink>
          <FooterLink href="#">Action</FooterLink>
          <FooterLink href="#">Comedy</FooterLink>
          <FooterLink href="#">Drama</FooterLink>
          <FooterLink href="#">Fantasy</FooterLink>
          <FooterLink href="#">Horror</FooterLink>
          <FooterLink href="#">Mystery</FooterLink>
        </FooterLinks>
      </FooterColumn>
      <FooterColumn>
        <SocialLinks>
          <SocialLink><Heading>Connect with Us</Heading></SocialLink>
          <SocialLink>Join Group Telegram</SocialLink>
          <SocialLink>Join Group Reddit</SocialLink>
          <SocialLink>Join Twitter</SocialLink>
        </SocialLinks>
      </FooterColumn>
    </FooterContainer>
  );
};

export default Footer;
