import React from 'react';
import icons from '../assets/icons.svg';
import { formatCount } from '../utils/utils';

const RecipeIngredients = ({ item: { name,  amount: { us: { value, unit } }} }) => (
    <li className="recipe__item">
        <svg className="recipe__icon">
            <use href={icons + '#icon-check'}></use>
        </svg>
        <div className="recipe__count">{formatCount(value)}</div>
        <div className="recipe__ingredient">
            <span className="recipe__unit">{unit.toLowerCase()} </span>
            {name.toLowerCase()}
        </div>
    </li>
);

export default RecipeIngredients;