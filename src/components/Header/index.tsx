import { NavLink } from 'react-router';
import { Timer, Scroll } from '@phosphor-icons/react';

import { HeaderContainer } from "./styles";

import logoIgnite from '../../assets/logo-ignite.svg'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to='/'>
        <img src={logoIgnite} alt="" />
      </NavLink>
      <nav>
        <NavLink to="/" title='Timer'>
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title='History'>
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
