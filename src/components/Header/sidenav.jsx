import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';


const SidebarWrapper = styled.div`
  position: fixed;
  top: 69%;
  left: 96%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50px;
  background-color: transparent;
  padding: 10px;
  z-index: 999;
`;



const SocialIcon = styled.a`
  display: block;
  text-align: center;
  margin-bottom: 14px;
  font-size: 24px;
  color: skyblue; /* Change the color to match the social media icon color */
  text-decoration: none;
`;

const StickySidebar = () => {
  return (
    <SidebarWrapper>
    <SocialIcon href="#">
      <FaFacebook />
    </SocialIcon>
    <SocialIcon href="#">
      <FaTwitter />
    </SocialIcon>
    <SocialIcon href="#">
      <FaInstagram />
    </SocialIcon>
    <SocialIcon href="#">
      <FaGithub />
    </SocialIcon>
  </SidebarWrapper>
  );
};

export default StickySidebar;
