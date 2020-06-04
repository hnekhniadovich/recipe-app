import React from 'react';

import { connect } from 'react-redux';

import RecipesList from './recipes-list.component';
import Recipe from './recipe.component';
import ShoppingList from './shopping-list.component';

class RecipesManager extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: null
        }
    }
    
    handleCurrentRecipe = (id) => {
        this.setState({ active: id});
    }

    render() {
        const { recipes, isPending, shoppingList } = this.props;

        return(
            <>
                <div className="results">
                    <RecipesList 
                        recipes={recipes} 
                        isPending={isPending}
                        handleCurrentRecipe={this.handleCurrentRecipe}
                        current={this.state.active}
                    />
                </div>
                <div className="recipe">
                {
                    recipes 
                    ? 
                    <Recipe recipes={recipes} id={this.state.active} isPending={isPending}/> 
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
        isPending: state.recipes.isPending,
        shoppingList: state.recipes.shoppingList
    }
};

export default connect(mapStateToProps)(RecipesManager);