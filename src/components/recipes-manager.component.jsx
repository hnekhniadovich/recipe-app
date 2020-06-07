import React from 'react';

import { connect } from 'react-redux';

import RecipesList from './recipes-list.component';
import Recipe from './recipe.component';
import ShoppingList from './shopping-list.component';

class RecipesManager extends React.Component {

    render() {
        const { recipes, isPending1, isPending2, shoppingList, activeRecipe,likesList } = this.props;

        return(
            <>
                <div className="results">
                    <RecipesList 
                        recipes={recipes} 
                        isPending={isPending1}
                    />
                </div>
                <div className="recipe">
                {
                    recipes || likesList
                    ? 
                    <Recipe recipes={recipes} id={activeRecipe} isPending={isPending2}/> 
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
                        &copy; by Jonas Schmedtmann. Powered by
                        <a href="http://food2fork.com" target="_blank" className="link">Food2Fork.com</a>.
                    </div>
                </div>
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes.recipes,
        isPending1: state.recipes.isPending1,
        isPending2: state.recipes.isPending2,
        shoppingList: state.recipes.shoppingList,
        activeRecipe: state.recipes.activeRecipe,
        likesList: state.likes.likesList
    }
};

export default connect(mapStateToProps)(RecipesManager);