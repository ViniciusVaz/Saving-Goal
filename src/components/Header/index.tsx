import * as React from 'react';
import Logo from '../../icons/logo.svg';

import './style.scss'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img src={Logo} alt="Logo Origin" className="header__logo"/>
      </div>
    </header>
  )
}

export default Header
