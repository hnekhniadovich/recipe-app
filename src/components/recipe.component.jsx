import React from 'react';
import nextId from "react-id-generator";

import { connect } from 'react-redux';

import { fetchRecipeInfoStart, fetchRecipeIngStart } from '../actions/recipe.actions';

import RecipeIngredients from './recipe-ingredients.component';


class Recipe extends React.Component {
    
    componentDidUpdate(prevProps) { 
        const { id, fetchRecipeInfo, fetchRecipeIng } = this.props;
       
        if (id !== prevProps.id) {
            fetchRecipeInfo(id);
            fetchRecipeIng(id);
          }
    }

    render() {

        const { info, ingredients } = this.props;
        
        return (
            <>
            {
                info 
                ? 
                <div className="recipe">
                    <figure className="recipe__fig">
                        <img src={info.image} alt={info.title} className="recipe__img" />
                        <h1 className="recipe__title">
                            <span>{info.title}</span>
                        </h1>
                    </figure>
                    <div className="recipe__details">
                        <div className="recipe__info">
                            <svg className="recipe__info-icon">
                                <use href="../assets/icons.svg#icon-stopwatch"></use>
                            </svg>
                                <span className="recipe__info-data recipe__info-data--minutes">{info.readyInMinutes}</span>
                            <span className="recipe__info-text"> minutes</span>
                        </div>
                        <div className="recipe__info">
                            <svg className="recipe__info-icon">
                                <use href="../assets/icons.svg#icon-man"></use>
                            </svg>
                                <span className="recipe__info-data recipe__info-data--people">{info.servings}</span>
                            <span className="recipe__info-text"> servings</span>

                            <div className="recipe__info-buttons">
                            <button className="btn-tiny">
                                <svg>
                                    <use href="../assets/icons.svg#icon-circle-with-minus"></use>
                                </svg>
                            </button>
                            <button className="btn-tiny">
                                <svg>
                                    <use href="../assets/icons.svg#icon-circle-with-plus"></use>
                                </svg>
                            </button>
                            </div>
                        </div>
                        <button className="recipe__love">
                            <svg className="header__likes">
                                <use href="../assets/icons.svg#icon-heart-outlined"></use>
                            </svg>
                        </button>
                    </div>

                    <div className="recipe__ingredients">

                        { 
                            ingredients ? 
                            
                                <ul className="recipe__ingredient-list">
                                    {
                                        ingredients.ingredients.map(item => <RecipeIngredients key={nextId()} item={item} />)
                                    }
                                </ul>
                        
                                :

                                null
                        }
                    
                    </div>

            

                    <div className="recipe__directions">
                        <h2 className="heading-2">How to cook it</h2>
                        <p className="recipe__directions-text">
                            This recipe was carefully designed and tested by
                            <span className="recipe__by"> {info.sourceName}</span>. Please check out directions at their website.
                        </p>
                        <a className="btn-small recipe__btn" href={info.sourceUrl} target="_blank">
                            <span>Directions</span>
                            <svg className="search__icon">
                                <use href="../assets/icons.svg#icon-triangle-right"></use>
                            </svg>
                        </a>
                    </div>

                </div>
                :
                null
            }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        info: state.recipes.recipeInfo,
        ingredients: state.recipes.recipeIng
    }
};
    

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRecipeInfo: (id) => dispatch(fetchRecipeInfoStart(id)),
        fetchRecipeIng: (id) => dispatch(fetchRecipeIngStart(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);