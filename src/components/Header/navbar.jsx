import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaFacebook, FaTelegram, FaInstagram,FaBars } from 'react-icons/fa';

const StyledNavbar = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100vw;
  font-family: "Gotham", sans-serif;
  font-weight: bold;
  color: white;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  transition: background-color 0.3s ease, color 0.3s ease;
  z-index: 999;

  @media (max-width: 360px), (max-width: 640px) {
    background-color:black;
  }

  
  
`;

const TextLogo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 20px;
  margin-right: auto;
  border-radius: 10px;
  color: white;

  @media (max-width: 360px), (max-width: 640px) {
  font-size: 10px;
  margin: 3px;
  display: none;
}

`;

const NavLinks = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  justify-content: center;
  flex-grow: 1;
`;

const NavLinkItem = styled.li`
  margin-left: 30px;
  position: relative;
  font-family: "Montserrat", sans-serif;
  background-color: transparent;
  border-radius: 25%;
  padding: 3px 10px;

  
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 20px;

  @media (max-width: 360px), (max-width: 640px) {
  font-size: 10px;
  display: none;
}

`;

const SubscribeButton = styled(NavLink)`
  background-color: #e50914;
  border-radius: 10px;
  height: 40px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;

  @media (max-width: 360px), (max-width: 640px) {
    margin: 3px;
    width: 60px;
    display: none;
  }
`;

const Modal = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;

  
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 10px;
  width: 60%;
  max-width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  text-align: center;

  @media (max-width: 640px) {
    width:200px;
    font-size: 10px;
    top: 10%;
  left: 30%;
  }
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const Text = styled.p`
  font-size: 18px;
`;

const LineText = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;
const MenuIcon = styled(FaBars)`
  font-size: 24px;
  cursor: pointer;
  color: white;
  position: sticky;
  top: 0;
  margin-right: 20%;
  z-index: 100;
  display:none;

  @media (max-width: 640px) {
    position: sticky;
    font-size: 25px;
    display: block;
    margin-right: 10%;
    border: 1px solid white;
    height: 30px;
    width: 40px;
  }
`;

const Sidebar = styled.div`
  position: absolute;
  top: 100px;
  right: -400px;
  width: 200px;
  height: 30%;
  background: rgba(0, 0, 0, 0.8);
  transition: right 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Adjusted to align links at the top */
  z-index: 998;

  &.open {
    right: 0;
  }
`;

const SidebarLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 20px;
  margin: 10px;
  align-self: flex-start; /* Align links at the top */
`;
const SocialMediaIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color:white;
  & > * {
    margin-right: 10px; // Adjust the spacing between icons as needed
  }
`;
const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <StyledNavbar>
        <TextLogo>ReactFlix</TextLogo>
        <NavLinks>
          <NavLinkItem>
            <NavLink to="/home">Browse</NavLink>
          </NavLinkItem>

          <NavLinkItem>
            <NavLink to="/reg">Login</NavLink>
          </NavLinkItem>
        </NavLinks>
        <NavLinkItem>
          <SubscribeButton onClick={toggleModal}>Subscribe</SubscribeButton>
        </NavLinkItem>
        
        <MenuIcon onClick={toggleSidebar} />
      </StyledNavbar>

      <Modal isOpen={isModalOpen}>
        <ModalContent>
          <CloseButton onClick={toggleModal}>&times;</CloseButton>
          <div>
            <Text>Want to Avail $12 Lifetime No Ads?</Text>
            <LineText>or</LineText>
            <Text>Want to Avail $1 1 Month No Ads?</Text>
          </div>
          <Link to="/payment">Proceed to Payment</Link>
        </ModalContent>
      </Modal>

      <Sidebar className={isSidebarOpen ? 'open' : ''}>
        <SidebarLink to="/home">Home</SidebarLink>
        <SidebarLink to="/reg">Register</SidebarLink>
        <SidebarLink to="/login">Login</SidebarLink>
        <SidebarLink onClick={toggleModal} style={{color:"red", textDecoration:"none"}}>Subscribe</SidebarLink>
        <SidebarLink>Follow us  </SidebarLink>
        <SidebarLink>
        <SocialMediaIcon>
      <FaFacebook size={30} color="white" />
      <FaTelegram size={30} color="white" />
      <FaInstagram size={30} color="white" />
    </SocialMediaIcon>

        </SidebarLink>
      </Sidebar>
    </div>
  );
};

export default Navbar;
