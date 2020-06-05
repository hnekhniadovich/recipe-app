import { RecipesActionTypes, RecipeActionTypes } from '../actions/recipe.types';
import { addIngrPerServing, deleteIngrPerServing } from '../utils/utils'; 

const INITIAL_STATE = {
    isPending: false,
    recipes: null,
    recipe: null,
    shoppingList: [],
    likesList: [],
    isLiked: false, 
    errorMessage: undefined
}

const recipeReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case RecipesActionTypes.FETCH_RECIPES_START:
            return {
                ...state,
                isPending: true
            }
        case RecipesActionTypes.FETCH_RECIPES_SUCCESS:
            return {
                ...state,
                isPending: false,
                recipes: action.payload
            }
        case RecipesActionTypes.FETCH_RECIPES_FAILURE:
            return {
                ...state,
                isPending: false,
                errorMessage: action.payload
            }
        case RecipeActionTypes.FETCH_RECIPE_START:
            return {
                ...state,
                isPending: true
            }
        case RecipeActionTypes.FETCH_RECIPE_SUCCESS:
            return {
                ...state,
                isPending: false,
                recipe: action.payload
            }
        case RecipeActionTypes.FETCH_RECIPE_FAILURE:
            return {
                ...state,
                isPending: false,
                errorMessage: action.payload
            }
        case RecipeActionTypes.ADD_SERVING:
            return {
                ...state,
                recipe: { ...state.recipe, 
                    servings: state.recipe.servings + 1,
                    ingredients: addIngrPerServing(state.recipe.ingredients)    
                }
            }
        case RecipeActionTypes.DELETE_SERVING:
            return {
                ...state,
                recipe: { ...state.recipe, 
                    servings: state.recipe.servings > 1 ? state.recipe.servings - 1 : 1,
                    ingredients: state.recipe.servings > 1 ? 
                        deleteIngrPerServing(state.recipe.ingredients) : 
                        [ ...state.recipe.ingredients]  }
            }
        case RecipeActionTypes.ADD_TO_SHOPPING_LIST:
            return {
                ...state,
                shoppingList: [ ...state.shoppingList, ...action.payload]
            }
        case RecipeActionTypes.DELETE_SHOPPING_LIST_ITEM:
            return {
                ...state,
                shoppingList: state.shoppingList.filter(item => item.id !== action.payload)
            }
        case RecipeActionTypes.ADD_TO_LIKES_LIST:
            return {
                ...state,
                likesList: [ ...state.likesList, action.payload ],
                isLiked: true
            }
        case RecipeActionTypes.DELETE_FROM_LIKES_LIST:
            return {
                ...state,
                likesList: state.likesList.filter(item => item.id !== action.payload),
                isLiked: false
            }
        
        default:
            return state;
    }
};

export default recipeReducer;