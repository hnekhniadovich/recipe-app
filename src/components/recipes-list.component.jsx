import React from 'react';

import { connect } from 'react-redux';

import { fetchRecipeInfoStart, fetchRecipeIngStart } from '../actions/recipe.actions';

import RecipesListItem from './recipes-list-item.component';

const RecipesList = ( {recipes, fetchRecipeInfo, fetchRecipeIng } ) => {

    console.log(recipes);
        
    return (
        <div>
        {
            recipes ?

            <ul className="results__list">
                {
            
                recipes.results.map(recipe => {
                    return (
                        <RecipesListItem 
                            key={recipe.id} 
                            recipe={recipe} 
                            fetchRecipeInfo={fetchRecipeInfo} 
                            fetchRecipeIng={fetchRecipeIng} />
                    )
                })}
            </ul>

            :

            null

            }

            <div className="results__pages">
                <button className="btn-inline results__btn--prev">
                    <svg className="search__icon">
                        <use href="img/icons.svg#icon-triangle-left"></use>
                    </svg>
                    <span>Page 1</span>
                </button>
                <button className="btn-inline results__btn--next">
                    <span>Page 3</span>
                    <svg className="search__icon">
                        <use href="img/icons.svg#icon-triangle-right"></use>
                    </svg>
                </button>
            </div>

        </div>
    )
};
    
const mapStateToProps = (state) => {
    return {
        recipes: state.recipes.recipes
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRecipeInfo: (id) => dispatch(fetchRecipeInfoStart(id)),
        fetchRecipeIng: (id) => dispatch(fetchRecipeIngStart(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);