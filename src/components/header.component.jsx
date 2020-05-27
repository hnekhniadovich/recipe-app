import React from 'react';
import logo from '../assets/logo.png';
import SearchBox from './search-box.component';

const Header = () => (
    <header className='header'>
        <img src={logo} alt="Logo" className="header__logo" />
        <SearchBox />
    </header>
)
    
export default Header;

