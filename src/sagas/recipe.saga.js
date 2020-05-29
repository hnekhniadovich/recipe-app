import { takeLatest, call, put, all } from 'redux-saga/effects';
import { 
    fetchRecipesSuccess, 
    fetchRecipesFailure, 
    fetchRecipeInfoSuccess, 
    fetchRecipeInfoFailure,
    fetchRecipeIngSuccess,
    fetchRecipeIngFailure
} from '../actions/recipe.actions';

import { RecipesActionTypes, RecipeInfoActionTypes, RecipeIngActionTypes } from '../actions/recipe.types';
import { getRecipes, getRecipeInfo, getRecipeIngredients } from '../utils/api';

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

export function* fetchRecipeInfoAsync(action) { 
    try {
        const recipeInfo = yield getRecipeInfo(action.payload);
        yield put(fetchRecipeInfoSuccess(recipeInfo));
    } catch (error) {
        yield put(fetchRecipeInfoFailure(error.message));
    }
};

export function* fetchRecipeInfo() {
    yield takeLatest(
        RecipeInfoActionTypes.FETCH_RECIPE_INFO_START,
        fetchRecipeInfoAsync
    )
};

export function* fetchRecipeIngAsync(action) { 
    try {
        const recipeIng = yield getRecipeIngredients(action.payload);
        yield put(fetchRecipeIngSuccess(recipeIng));
    } catch (error) {
        yield put(fetchRecipeIngFailure(error.message));
    }
};

export function* fetchRecipeIng() {
    yield takeLatest(
        RecipeIngActionTypes.FETCH_RECIPE_ING_START,
        fetchRecipeIngAsync
    )
};

export function* recipesSagas() {
    yield all([
        call(fetchRecipes),
        call(fetchRecipeInfo),
        call(fetchRecipeIng)
    ]);
};