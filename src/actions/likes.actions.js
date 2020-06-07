import { LikesTypes } from './recipe.types';

export const addToLikesList = (likedRecipe) => ({
    type: LikesTypes.ADD_TO_LIKES_LIST,
    payload: likedRecipe
});

export const deleteFromLikesList  = (id) => ({
    type: LikesTypes.DELETE_FROM_LIKES_LIST,
    payload: id
});