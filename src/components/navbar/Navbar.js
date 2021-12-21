import React, { useState } from "react";
import { Nav, Logo, Hamburger, MenuLink, Menu } from "./NavbarStyle";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo to="/">
        <img
          alt="logo"
          src="https://i.pinimg.com/564x/e3/f9/c4/e3f9c42f3b449e72123466082ae3eb18.jpg"
        />
        <span> All Recipe</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/login">Login</MenuLink>
        <MenuLink to="/youtube">YouTube</MenuLink>
        <MenuLink to="/github">Github</MenuLink>
      </Menu>
    </Nav>
  );
};
export default Navbar;
