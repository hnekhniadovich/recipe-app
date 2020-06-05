import { takeLatest, call, put, all } from 'redux-saga/effects';
import { 
    fetchRecipesSuccess, 
    fetchRecipesFailure, 
    fetchRecipeSuccess, 
    fetchRecipeFailure
} from '../actions/recipe.actions';

import { RecipesActionTypes, RecipeActionTypes } from '../actions/recipe.types';
import { getRecipes, getRecipeInfo, getRecipeIngredients } from '../utils/api';
import { addAmountPerServing } from '../utils/utils';

export function* fetchRecipesAsync(action) { 
    try {
        const recipes = yield getRecipes(action.payload);
        yield put(fetchRecipesSuccess(recipes));
    } catch (error) {
        yield put(fetchRecipesFailure(error.message));
    }
};

export function* fetchRecipes() {
    yield takeLatest(
        RecipesActionTypes.FETCH_RECIPES_START,
        fetchRecipesAsync
    )
};

export function* fetchRecipeAsync(action) { 
    try {
        const recipeInformation = yield getRecipeInfo(action.payload);
        const recipeIngredients = yield getRecipeIngredients(action.payload);

        let recipeInfo = {...recipeInformation, ...recipeIngredients};
        let recipe = { ...recipeInfo, isLiked: false, ingredients: addAmountPerServing(recipeInfo.ingredients, recipeInfo.servings )};

        yield put(fetchRecipeSuccess(recipe));
    } catch (error) {
        yield put(fetchRecipeFailure(error.message));
    }
};

export function* fetchRecipe() {
    yield takeLatest(
        RecipeActionTypes.FETCH_RECIPE_START,
        fetchRecipeAsync
    )
};

export function* recipesSagas() {
    yield all([
        call(fetchRecipes),
        call(fetchRecipe)
    ]);
};