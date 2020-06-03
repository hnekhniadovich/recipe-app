import { RecipesActionTypes, RecipeInfoActionTypes } from '../actions/recipe.types';
import { addIngrPerServing, deleteIngrPerServing } from '../utils/utils'; 

const INITIAL_STATE = {
    recipes: null,
    recipeInfo: null,
    recipeIng: null,
    isPending: false,
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
        case RecipeInfoActionTypes.FETCH_RECIPE_INFO_START:
            return {
                ...state,
                isPending: true
            }
        case RecipeInfoActionTypes.FETCH_RECIPE_INFO_SUCCESS:
            return {
                ...state,
                isPending: false,
                recipeInfo: action.payload
            }
        case RecipeInfoActionTypes.FETCH_RECIPE_INFO_FAILURE:
            return {
                ...state,
                isPending: false,
                errorMessage: action.payload
            }
        case RecipeInfoActionTypes.ADD_SERVING:
            return {
                ...state,
                recipeInfo: { ...state.recipeInfo, 
                    servings: state.recipeInfo.servings + 1,
                    ingredients: addIngrPerServing(state.recipeInfo.ingredients)    
                }
            }
        case RecipeInfoActionTypes.DELETE_SERVING:
            return {
                ...state,
                recipeInfo: { ...state.recipeInfo, 
                    servings: state.recipeInfo.servings > 1 ? state.recipeInfo.servings - 1 : 1,
                    ingredients: state.recipeInfo.servings > 1 ? 
                        deleteIngrPerServing(state.recipeInfo.ingredients) : 
                        [ ...state.recipeInfo.ingredients]  }
            }
        default:
            return state;
    }
};

export default recipeReducer;