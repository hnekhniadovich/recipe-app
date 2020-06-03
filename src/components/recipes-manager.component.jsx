import React from 'react';

import { connect } from 'react-redux';

import RecipesList from './recipes-list.component';
import Recipe from './recipe.component';

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
        const { recipes, isPending } = this.props;

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

                {
                    recipes 
                    ? 
                    <Recipe recipes={recipes} id={this.state.active} isPending={isPending}/> 
                    :
                    null
                }
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes.recipes,
        isPending: state.recipes.isPending
    }
};

export default connect(mapStateToProps)(RecipesManager);