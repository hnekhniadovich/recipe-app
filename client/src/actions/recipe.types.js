export const SearchActionTypes = {
    CHANGE_SEARCHFIELD: 'CHANGE_SEARCHFIELD'
};

export const RecipesActionTypes = {
    FETCH_RECIPES_START: 'FETCH_RECIPES_START',
    FETCH_RECIPES_SUCCESS: 'FETCH_RECIPES_SUCCESS',
    FETCH_RECIPES_FAILURE: 'FETCH_RECIPES_FAILURE'
};

export const RecipeActionTypes = {
    FETCH_RECIPE_START: 'FETCH_RECIPE_START',
    FETCH_RECIPE_SUCCESS: 'FETCH_RECIPE_SUCCESS',
    FETCH_RECIPE_FAILURE: 'FETCH_RECIPE_FAILURE',
    ADD_SERVING: 'ADD_SERVING',
    DELETE_SERVING: 'DELETE_SERVING',
    ADD_TO_SHOPPING_LIST: 'ADD_TO_SHOPPING_LIST',
    DELETE_FROM_SHOPPING_LIST: 'DELETE_FROM_SHOPPING_LIST',
    SET_ACTIVE_RECIPE: 'SET_ACTIVE_RECIPE'
};

export const PaginationActionTypes = {
    PAGE_NEXT: 'PAGE_NEXT',
    PAGE_PREV: 'PAGE_PREV'
};

export const LikesActionTypes = {
    ADD_TO_LIKES_LIST: 'ADD_TO_LIKES_LIST',
    DELETE_FROM_LIKES_LIST: 'DELETE_FROM_LIKES_LIST'
};

export const ShoppingActionTypes = {
    ADD_TO_SHOPPING_LIST: 'ADD_TO_SHOPPING_LIST',
    DELETE_FROM_SHOPPING_LIST: 'DELETE_FROM_SHOPPING_LIST',
};

export default {
    SearchActionTypes,
    RecipesActionTypes,
    RecipeActionTypes,
    PaginationActionTypes,
    ShoppingActionTypes,
    LikesActionTypes
};

