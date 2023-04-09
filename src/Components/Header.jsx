import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavBarElements'
const Navbar = () => {
  return (
    <>
      <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink to="/home" activeStyle>
            Home
          </MenuLink>
          <MenuLink to="/movies" activeStyle>
            Movies
          </MenuLink>
          <MenuLink to="/about" activeStyle>
            Products
          </MenuLink>
          <MenuLink to="/contact" activeStyle>
            Contact
          </MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navbar