import React from 'react';
import icons from '../assets/icons.svg';

const PageButton = ({ direction, pageNum, arrow, action }) => (
    <button className={`btn-inline results__btn--${direction}`} onClick={action}>
        <svg className="search__icon">
            <use href={icons + `#icon-triangle-${arrow}`}></use>
        </svg>
        <span>Page {pageNum}</span>
    </button>
)

export default PageButton;