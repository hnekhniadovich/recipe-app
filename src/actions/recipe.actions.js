import { RecipesActionTypes, RecipeInfoActionTypes } from './recipe.types';

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

export const addServing  = () => ({
    type: RecipeInfoActionTypes.ADD_SERVING
});

export const deleteServing  = () => ({
    type: RecipeInfoActionTypes.DELETE_SERVING
});


