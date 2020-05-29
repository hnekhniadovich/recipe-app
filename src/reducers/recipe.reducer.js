import { RecipesActionTypes, RecipeInfoActionTypes, RecipeIngActionTypes } from '../actions/recipe.types';

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
                recipes: action.payload,
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
                recipeInfo: action.payload,
            }
        case RecipeInfoActionTypes.FETCH_RECIPE_INFO_FAILURE:
            return {
                ...state,
                isPending: false,
                errorMessage: action.payload
            }
        case RecipeIngActionTypes.FETCH_RECIPE_ING_START:
            return {
                ...state,
                isPending: true
            }
        case RecipeIngActionTypes.FETCH_RECIPE_ING_SUCCESS:
            return {
                ...state,
                isPending: false,
                recipeIng: action.payload,
            }
        case RecipeIngActionTypes.FETCH_RECIPE_ING_FAILURE:
            return {
                ...state,
                isPending: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
};

export default recipeReducer;