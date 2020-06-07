import React from 'react';

import { connect } from 'react-redux';

import RecipesList from './recipes-list.component';
import Recipe from './recipe.component';
import ShoppingList from './shopping-list.component';

class RecipesManager extends React.Component {

    render() {
        const { recipes, shoppingList, likesList } = this.props;

        return(
            <>
                <div className="results"><RecipesList /></div>
                <div className="recipe">
                {
                    recipes || likesList
                    ? 
                    <Recipe /> 
                    :
                    null
                }
                </div>
                <div className="shopping">
                    <h2 className="heading-2">My Shopping List</h2>
                    {
                        shoppingList.length > 0
                        ?
                        <ShoppingList />
                        :
                        null
                    }
                     <div className="copyright">
                        &copy; by Hanna Nekhniadovich and Jonas Schmedtmann. 
                        Powered by <a href="https://spoonacular.com/food-ap" target="_blank" className="link" rel="noopener noreferrer">Spoonacular API</a>.
                    </div>
                </div>
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes.recipes,
        shoppingList: state.recipes.shoppingList,
        likesList: state.likes.likesList
    }
};

export default connect(mapStateToProps)(RecipesManager);