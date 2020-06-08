import { RecipeActionTypes } from './recipe.types';

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

export const setActiveRecipe = (id) => ({
    type: RecipeActionTypes.SET_ACTIVE_RECIPE,
    payload: id
});




