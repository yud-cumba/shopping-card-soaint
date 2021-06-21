import React from 'react';
import { Link, Nav, Logo } from './styles';
import { Favs } from '../Favs';
export const Header = () => {
  return (
    <Nav>
      <Link to="/">
        <Logo
          src="https://fontmeme.com/permalink/210620/c2571cf64cb7e23a7fb767bc58a79521.png"
          alt="super-mario-font"
          border="0"
        ></Logo>
      </Link>
      <Favs />
    </Nav>
  );
};
