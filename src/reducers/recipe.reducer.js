import { RecipesActionTypes, RecipeActionTypes } from '../actions/recipe.types';
import { addIngrPerServing, deleteIngrPerServing } from '../utils/utils'; 

const INITIAL_STATE = {
    isPending1: false,
    isPending2: false,
    recipes: null,
    recipe: null,
    activeRecipe: null,
    shoppingList: [],
    likesList: [],
    errorMessage: undefined
};

const recipeReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case RecipesActionTypes.FETCH_RECIPES_START:
            return {
                ...state,
                isPending1: true
            }
        case RecipesActionTypes.FETCH_RECIPES_SUCCESS:
            return {
                ...state,
                isPending1: false,
                recipes: action.payload
            }
        case RecipesActionTypes.FETCH_RECIPES_FAILURE:
            return {
                ...state,
                isPending1: false,
                errorMessage: action.payload
            }
        case RecipeActionTypes.FETCH_RECIPE_START:
            return {
                ...state,
                isPending2: true
            }
        case RecipeActionTypes.FETCH_RECIPE_SUCCESS:
            return {
                ...state,
                isPending2: false,
                recipe: action.payload
            }
        case RecipeActionTypes.FETCH_RECIPE_FAILURE:
            return {
                ...state,
                isPending2: false,
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
        case RecipeActionTypes.SET_ACTIVE_RECIPE:
            return {
                ...state,
                activeRecipe: action.payload
            }
        default:
            return state;
    }
};

export default recipeReducer;