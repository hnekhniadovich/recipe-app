import React from 'react';
import nextId from "react-id-generator";

import { connect } from 'react-redux';

import { 
    fetchRecipeStart, 
    addServing, 
    deleteServing, 
    addToShoppingList } from '../actions/recipe.actions';

import { addToLikesList, deleteFromLikesList } from '../actions/likes.actions';

import RecipeIngredients from './recipe-ingredients.component';
import Spinner from './spinner.component';
import icons from '../assets/icons.svg';


class Recipe extends React.Component {

    componentDidUpdate(prevProps) { 
        const { id, fetchRecipe } = this.props;
       
        if (id !== prevProps.id) {
            fetchRecipe(id);
        }
    }

    isRecipeLiked = (list, id) => {
        return !!((list.filter(item => item.id === id)).length);
    }

    toggleLikeBtn = () => { 
        const { recipe, addToLikesList, deleteFromLikesList, likesList } = this.props;

        let isLiked = this.isRecipeLiked(likesList, recipe.id);

        if(!isLiked) {
            addToLikesList(recipe);
        } else {
            deleteFromLikesList(recipe.id);
        }
    }

    render() {

        const { recipe, isPending, addServing, deleteServing, addToShoppingList, likesList } = this.props;

        let content;

        if(isPending) {
            content = <Spinner />
        } else {
            if(recipe) {
                let isLiked = this.isRecipeLiked(likesList, recipe.id);
                content = (
                    <>
                        <figure className="recipe__fig">
                            <img src={recipe.image} alt={recipe.title} className="recipe__img" />
                            <h1 className="recipe__title">
                                <span>{recipe.title}</span>
                            </h1>
                        </figure>
                        <div className="recipe__details">
                            <div className="recipe__info">
                                <svg className="recipe__info-icon">
                                    <use href={icons + '#icon-stopwatch'}></use>
                                </svg>
                                    <span className="recipe__info-data recipe__info-data--minutes">{recipe.readyInMinutes}</span>
                                <span className="recipe__info-text"> minutes</span>
                            </div>
                            <div className="recipe__info">
                                <svg className="recipe__info-icon">
                                    <use href={icons + '#icon-man'}></use>
                                </svg>
                                    <span className="recipe__info-data recipe__info-data--people">{recipe.servings}</span>
                                <span className="recipe__info-text"> servings</span>

                                <div className="recipe__info-buttons">
                                    <button className="btn-tiny" onClick={deleteServing}>
                                        <svg>
                                            <use href={icons + '#icon-circle-with-minus'}></use>
                                        </svg>
                                    </button>
                                    <button className="btn-tiny" onClick={addServing}>
                                        <svg>
                                            <use href={icons + '#icon-circle-with-plus'}></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            {console.log()}
                            <button className={"recipe__love"} onClick={this.toggleLikeBtn}>
                                <svg className="header__likes">
                                    <use href={icons + `${isLiked ? "#icon-heart" : "#icon-heart-outlined"}`}></use>
                                </svg>
                            </button>
                        </div>

                        <div className="recipe__ingredients">

                            { 
                                recipe
                                ?
                                <>
                                    <ul className="recipe__ingredient-list">
                                        {
                                            recipe.ingredients.map(item => <RecipeIngredients key={nextId()} item={item} />)
                                        }
                                    </ul>
                                    <button className="btn-small recipe__btn" onClick={() => addToShoppingList(recipe.ingredients)}>
                                        <svg className="search__icon">
                                            <use href={icons + '#icon-shopping-cart'}></use>
                                        </svg>
                                        <span>Add to shopping list</span>
                                    </button>
                                </>
                                :
                                null
                            }
                        
                        </div>

                        <div className="recipe__directions">
                            <h2 className="heading-2">How to cook it</h2>
                            <p className="recipe__directions-text">
                                This recipe was carefully designed and tested by
                                <span className="recipe__by"> {recipe.sourceName}</span>. Please check out directions at their website.
                            </p>
                            <a className="btn-small recipe__btn" href={recipe.sourceUrl} target="_blank">
                                <span>Directions</span>
                                <svg className="search__icon">
                                    <use href={icons + '#icon-triangle-right'}></use>
                                </svg>
                            </a>
                        </div>
                    </>
                )
            } else {
                content = null
            }
        }
        
        return (
            <>{ content }</>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recipe: state.recipes.recipe, 
        likesList: state.likes.likesList
    }
};
    
const mapDispatchToProps = (dispatch) => {
    return {
        fetchRecipe: (id) => dispatch(fetchRecipeStart(id)),
        addServing:() => dispatch(addServing()),
        deleteServing:() => dispatch(deleteServing()),
        addToShoppingList: (ingredients) => dispatch(addToShoppingList(ingredients)),
        addToLikesList: (recipe) => dispatch(addToLikesList(recipe)),
        deleteFromLikesList: (id) => dispatch(deleteFromLikesList(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);