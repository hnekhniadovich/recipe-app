import { all, call } from 'redux-saga/effects';

import { recipesSagas } from './sagas/recipe.saga';

export default function* rootSaga() {
    yield all([
        call(recipesSagas)
    ]);
}