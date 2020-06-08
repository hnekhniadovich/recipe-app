import { LikesActionTypes } from './recipe.types';

export const addToLikesList = (likedRecipe) => ({
    type: LikesActionTypes.ADD_TO_LIKES_LIST,
    payload: likedRecipe
});

export const deleteFromLikesList  = (id) => ({
    type: LikesActionTypes.DELETE_FROM_LIKES_LIST,
    payload: id
});