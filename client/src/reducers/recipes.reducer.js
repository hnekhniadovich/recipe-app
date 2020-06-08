import { RecipesActionTypes } from '../actions/recipe.types';

const INITIAL_STATE = {
    isPending: false,
    recipes: null,
    errorMessage: undefined
};

const recipesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case RecipesActionTypes.FETCH_RECIPES_START:
            return {
                ...state,
                isPending: true
            };
        case RecipesActionTypes.FETCH_RECIPES_SUCCESS:
            return {
                ...state,
                isPending: false,
                recipes: action.payload
            };
        case RecipesActionTypes.FETCH_RECIPES_FAILURE:
            return {
                ...state,
                isPending: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default recipesReducer;