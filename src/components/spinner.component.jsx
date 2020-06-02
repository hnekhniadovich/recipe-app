import React from 'react';
import icons from '../assets/icons.svg';

const Spinner = () => (
    <div className="loader">
        <svg>
            <use href={icons + '#icon-cw'}></use>
        </svg>
    </div>
);

export default Spinner;