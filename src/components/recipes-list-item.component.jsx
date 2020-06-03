import React from 'react';

import { limitRecipeTitle } from '../utils/utils';

class RecipesListItem extends React.Component {

    handleFetchRecipeInfo = event => {
        event.preventDefault();
        const { recipe, handleCurrentRecipe } = this.props;
        handleCurrentRecipe(recipe.id);
    }

    render() {
        const { id, title } = this.props.recipe;
        const { current } = this.props;
       
        return (
            <li>
                <a className={`results__link ${current === id ? "results__link--active" : " "}`} href={'/' + id} onClick={this.handleFetchRecipeInfo}>
                    <figure className="results__fig">
                        <img src={`https://spoonacular.com/recipeImages/${id}-556x370.jpg`} alt="Test" />
                    </figure>
                    <div className="results__data">
                    <h4 className="results__name">{limitRecipeTitle(title)}</h4>
                    </div>
                </a>
            </li>
        )
    }  
};

export default RecipesListItem;