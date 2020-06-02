import React from 'react';

import RecipesListItem from './recipes-list-item.component';
import Spinner from './spinner.component';

class RecipesList extends React.Component {

    render() {

        console.log("recipe list is rendering!");
        

        const {recipes, isPending, handleCurrentRecipe } = this.props;

        let content;

        if(isPending) {
            content = <Spinner />
        } else {
            if(recipes) {
                content = (
                    <ul className="results__list">
                    {
                        recipes.results.map(recipe => {
                            return (
                                <RecipesListItem 
                                    key={recipe.id} 
                                    recipe={recipe} 
                                    handleCurrentRecipe={handleCurrentRecipe}
                                />
                            )
                        })}
                    </ul>
                )
            } else {
                content = null
            }
        }

        return (
            <>
                { content }

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

            </>
        )
    }
}

    
    
export default RecipesList;