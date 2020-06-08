import { LikesActionTypes } from '../actions/recipe.types';

const INITIAL_STATE = {
    likesList: [],
};

const likesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LikesActionTypes.ADD_TO_LIKES_LIST:
            return {
                ...state,
                likesList: [ ...state.likesList, action.payload ],
                recipe: { ...state.recipe, isLiked: true }
            };
        case LikesActionTypes.DELETE_FROM_LIKES_LIST:
            return {
                ...state,
                likesList: state.likesList.filter(item => item.id !== action.payload),
                recipe: { ...state.recipe, isLiked: false }
            };
        default:
            return state;
    }
};

export default likesReducer;