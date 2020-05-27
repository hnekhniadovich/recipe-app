import { RecipeActionTypes } from './recipe.types';

export const fetchRecipesStart = (searchField) => ({
    type: RecipeActionTypes.FETCH_RECIPES_START,
    payload: searchField
});

export const fetchRecipesSuccess = (recipes) => ({
    type: RecipeActionTypes.FETCH_RECIPES_SUCCESS,
    payload: recipes
});

export const fetchRecipesFailure = (errorMessage) => ({
    type: RecipeActionTypes.FETCH_RECIPES_FAILURE,
    payload: errorMessage
});
