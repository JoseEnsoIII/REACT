import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
`;

const TextLogo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 20px;
  margin-right: auto;
  border-radius: 10px;
  color: white;
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
  padding: 5px 10px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 20px;
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

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
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
    </div>
  );
};

export default Navbar;
