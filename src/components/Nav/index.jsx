import React from 'react'
import { useLocation } from 'react-router-dom';

import Container from '../../layout/Container'
import links from '../../router'

import { NavLinks, NavList, NavLink} from './navBarStyled';
import classes from './NavLink.module.scss';

const Nav = () => {
  const location = useLocation()
  return (
    <Container>
      <NavLinks>
        <NavList>
          {links.map((link,i) => (
            <li key={i}>
              <NavLink 
                location
                href={link.link}
                className={location.pathname === link.link ? classes['active'] : ""}
                >
                  {link.name}
              </NavLink>
            </li>
          ) )}
        </NavList>
      </NavLinks>
      </Container>
  )
}

export default Nav