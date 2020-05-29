import { RecipesActionTypes, RecipeInfoActionTypes, RecipeIngActionTypes } from './recipe.types';

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

export const fetchRecipeInfoStart = (id) => ({
    type: RecipeInfoActionTypes.FETCH_RECIPE_INFO_START,
    payload: id
});

export const fetchRecipeInfoSuccess = (recipeInfo) => ({
    type: RecipeInfoActionTypes.FETCH_RECIPE_INFO_SUCCESS,
    payload: recipeInfo
});

export const fetchRecipeInfoFailure = (errorMessage) => ({
    type: RecipeInfoActionTypes.FETCH_RECIPE_INFO_FAILURE,
    payload: errorMessage
});

export const fetchRecipeIngStart = (id) => ({
    type: RecipeIngActionTypes.FETCH_RECIPE_ING_START,
    payload: id
});

export const fetchRecipeIngSuccess = (recipeIng) => ({
    type: RecipeIngActionTypes.FETCH_RECIPE_ING_SUCCESS,
    payload: recipeIng
});

export const fetchRecipeIngFailure = (errorMessage) => ({
    type: RecipeIngActionTypes.FETCH_RECIPE_ING_FAILURE,
    payload: errorMessage
});
