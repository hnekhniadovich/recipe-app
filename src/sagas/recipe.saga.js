import { takeLatest, call, put, all } from 'redux-saga/effects';
import { fetchRecipesSuccess, fetchRecipesFailure } from '../actions/recipe.actions';

import { RecipeActionTypes } from '../actions/recipe.types';
import { getRecipes } from '../utils/api';

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
        RecipeActionTypes.FETCH_RECIPES_START,
        fetchRecipesAsync
    )
};

export function* recipesSagas() {
    yield all([call(fetchRecipes)]);
};