import { RecipeActionTypes } from '../actions/recipe.types';
import { addIngrPerServing, deleteIngrPerServing } from '../utils/utils'; 

const INITIAL_STATE = {
    isPending: false,
    recipe: null,
    activeRecipe: null,
    shoppingList: [],
    errorMessage: undefined
};

const recipeReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
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