import { PaginationActionTypes, RecipesActionTypes } from '../actions/recipe.types';
 
const INITIAL_STATE = {
    pageNumber: 1
};

const paginationReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case PaginationActionTypes.PAGE_NEXT:
            return {
                ...state,
                pageNumber: state.pageNumber + 1

            }
        case PaginationActionTypes.PAGE_PREV:
            return {
                ...state,
                pageNumber: state.pageNumber - 1
            }
        case RecipesActionTypes.FETCH_RECIPES_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    };
};

export default paginationReducer;