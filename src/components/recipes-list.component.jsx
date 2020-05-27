import React from 'react';

import { connect } from 'react-redux';

const RecipesList = ( {recipes} ) => {
    console.log("Logging from recipes list");
    console.log(recipes);
    
    
    return (
        <div>
        {
            recipes ?

            <ul className="results__list">
                {
            
                recipes.results.map(recipe => {
                    return (
                        <li key={recipe.id}>
                            <a className="results__link results__link--active" href={recipe.id}>
                                <figure className="results__fig">
                                    <img src="https://www.cruzinwaiter.com/editable/templates/default/images/carousel-1.jpg" alt="Test" />
                                </figure>
                                <div className="results__data">
                                <h4 className="results__name">{recipe.title}</h4>
                                    <p className="results__author">The Pioneer Woman</p>
                                </div>
                            </a>
                    </li>
                    )
                })}
            </ul>

            :

            null

            }

        </div>
    )
};
    
const mapStateToProps = (state) => {
    return {
        recipes: state.recipes.recipes
    }
}

export default connect(mapStateToProps)(RecipesList);