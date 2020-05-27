import { RecipeActionTypes } from '../actions/recipe.types';

const INITIAL_STATE = {
    recipes: null,
    isPending: false,
    errorMessage: undefined
}

const recipeReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case RecipeActionTypes.FETCH_RECIPES_START:
            return {
                ...state,
                isPending: true
            }
        case RecipeActionTypes.FETCH_RECIPES_SUCCESS:
            return {
                ...state,
                isPending: false,
                recipes: action.payload,
            }
        case RecipeActionTypes.FETCH_RECIPES_FAILURE:
            return {
                ...state,
                isPending: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default recipeReducer;