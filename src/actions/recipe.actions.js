import { RecipesActionTypes, RecipeActionTypes } from './recipe.types';

export const fetchRecipesStart = (searchField) => ({
    type: RecipesActionTypes.FETCH_RECIPES_START,
    payload: searchField
});

export const fetchRecipesSuccess = (recipes) => ({
    type: RecipesActionTypes.FETCH_RECIPES_SUCCESS,
    payload: recipes
});

export const fetchRecipesFailure = (errorMessage) => ({
    type: RecipesActionTypes.FETCH_RECIPES_FAILURE,
    payload: errorMessage
});

export const fetchRecipeStart = (id) => ({
    type: RecipeActionTypes.FETCH_RECIPE_START,
    payload: id
});

export const fetchRecipeSuccess = (recipe) => ({
    type: RecipeActionTypes.FETCH_RECIPE_SUCCESS,
    payload: recipe
});

export const fetchRecipeFailure = (errorMessage) => ({
    type: RecipeActionTypes.FETCH_RECIPE_FAILURE,
    payload: errorMessage
});

export const addServing  = () => ({
    type: RecipeActionTypes.ADD_SERVING
});

export const deleteServing  = () => ({
    type: RecipeActionTypes.DELETE_SERVING
});

export const addToShoppingList  = (ingredients) => ({
    type: RecipeActionTypes.ADD_TO_SHOPPING_LIST,
    payload: ingredients
});

export const deleteShoppingListItem  = (id) => ({
    type: RecipeActionTypes.DELETE_SHOPPING_LIST_ITEM,
    payload: id
});

export const addToLikesList = (likedRecipe) => ({
    type: RecipeActionTypes.ADD_TO_LIKES_LIST,
    payload: likedRecipe
});

export const deleteFromLikesList  = (id) => ({
    type: RecipeActionTypes.DELETE_FROM_LIKES_LIST,
    payload: id
});

export const setActiveRecipe = (id) => ({
    type: RecipeActionTypes.SET_ACTIVE_RECIPE,
    payload: id
});




