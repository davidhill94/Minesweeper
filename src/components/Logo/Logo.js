import React from 'react'
import { LogoImg } from './LogoStyles';
import logo from '../../images/minesweeper_logo.png';

const Logo = () => {
  return (
    <LogoImg src={logo} alt="Minesweeper Logo"/>
  )
}

export default Logo