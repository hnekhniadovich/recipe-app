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
        console.log('state in recipes manager');
        console.log(this.state);
    }

    render() {
        const { recipes } = this.props;

        return(
            <>
                <div className="results">
                    <RecipesList 
                        recipes={recipes} 
                        handleCurrentRecipe={this.handleCurrentRecipe}
                    />
                </div>

                {
                    recipes ? 

                    <Recipe recipes={recipes} id={this.state.active}/> :

                    null
                }
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes.recipes
    }
};

export default connect(mapStateToProps)(RecipesManager);