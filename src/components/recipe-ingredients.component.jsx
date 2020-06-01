import React from 'react';

const RecipeIngredients = ({ item: { name,  amount: { metric: { value, unit } }} }) => (
    <li className="recipe__item">
        <svg className="recipe__icon">
            <use href="../assets/icons.svg#icon-check"></use>
        </svg>
        <div className="recipe__count">{value}</div>
        <div className="recipe__ingredient">
            <span className="recipe__unit">{unit.toLowerCase()} </span>
            {name.toLowerCase()}
        </div>
    </li>
)


export default RecipeIngredients;