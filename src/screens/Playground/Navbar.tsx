import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  height: 4.5rem;
  background: #241f21;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
`;

const Logo = styled.img`
  width: 45px;
`;

const MainHeading = styled.h1`
  font-size: 1.9rem;
  font-weight: 400;
  color: white;

  span {
    font-weight: 700;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo src='/logo.png' alt='' />
        <MainHeading>
          <span>Code</span> Deck
        </MainHeading>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
