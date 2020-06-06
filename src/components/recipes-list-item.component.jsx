import React from 'react';

import { connect } from 'react-redux';

import { setActiveRecipe } from '../actions/recipe.actions';
import { limitRecipeTitle } from '../utils/utils';


class RecipesListItem extends React.Component {

    handleFetchRecipe = event => {
        event.preventDefault();
        const { recipe, setActiveRecipe } = this.props;
        setActiveRecipe(recipe.id);
    }

    render() {
        const { id, title } = this.props.recipe;
        const { activeRecipe } = this.props;
       
        return (
            <li>
                <a className={`results__link ${activeRecipe === id ? "results__link--active" : " "}`} href={'/' + id} onClick={this.handleFetchRecipe}>
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

const mapDispatchToProps = (dispatch) => {
    return {
        setActiveRecipe: (id) => dispatch(setActiveRecipe(id))
    };
};

const mapStateToProps = (state) => {
    return {
        activeRecipe: state.recipes.activeRecipe
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesListItem);