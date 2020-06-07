import React from 'react';

import SearchBox from './search-box.component';
import LikesList from './likes-list.component';
import logo from '../assets/logo.png';


const Header = () => (
    <header className='header'>
        <img src={logo} alt="Logo" className="header__logo" />
        <SearchBox />
        <LikesList />  
    </header>
);

export default Header;

