import { SearchActionTypes } from '../actions/recipe.types';

const INITIAL_STATE = {
    searchField: ''
};

const searchReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SearchActionTypes.CHANGE_SEARCHFIELD:
            return {
                ...state,
                searchField: action.payload
            }
        default:
            return state;
    }
};

export default searchReducer;

