import { takeLatest, call, put, all } from 'redux-saga/effects';
import { 
    fetchRecipesSuccess, 
    fetchRecipesFailure, 
    fetchRecipeInfoSuccess, 
    fetchRecipeInfoFailure
} from '../actions/recipe.actions';

import { RecipesActionTypes, RecipeInfoActionTypes } from '../actions/recipe.types';
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

export function* fetchRecipeInfoAsync(action) { 
    try {
        const recipeInformation = yield getRecipeInfo(action.payload);
        const recipeIngredients = yield getRecipeIngredients(action.payload);

        let recipeInfo = {...recipeInformation, ...recipeIngredients};
        let newRecipeInfo = { ...recipeInfo, ingredients: addAmountPerServing(recipeInfo.ingredients, recipeInfo.servings )};

        yield put(fetchRecipeInfoSuccess(newRecipeInfo));
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

export function* recipesSagas() {
    yield all([
        call(fetchRecipes),
        call(fetchRecipeInfo)
    ]);
};