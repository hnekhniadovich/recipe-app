import { SearchActionTypes, RecipesActionTypes } from '../actions/recipe.types';

const INITIAL_STATE = {
    searchField: ''
};

const searchReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SearchActionTypes.CHANGE_SEARCHFIELD:
            return {
                ...state,
                searchField: action.payload
            };
        case RecipesActionTypes.FETCH_RECIPES_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};

export default searchReducer;

