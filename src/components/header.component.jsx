import React from 'react';
import logo from '../assets/logo.png';
import SearchBox from './search-box.component';
import icons from '../assets/icons.svg';

const Header = () => (
    <header className='header'>
        <img src={logo} alt="Logo" className="header__logo" />
        <SearchBox />
        
        <div className="likes">
            <div className="likes__field">
                <svg className="likes__icon">
                    <use href={icons + '#icon-heart'}></use>
                </svg>
            </div>
            <div className="likes__panel">
                <ul className="likes__list">
                    <li>
                        <a className="likes__link" href="#23456">
                            <figure className="likes__fig">
                                <img src="img/test-1.jpg" alt="Test" />
                            </figure>
                            <div className="likes__data">
                                <h4 className="likes__name">Pasta with Tomato ...</h4>
                                <p className="likes__author">The Pioneer Woman</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
)
    
export default Header;

