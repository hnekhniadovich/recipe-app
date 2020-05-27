import { combineReducers } from 'redux';
import recipeReducer from './reducers/recipe.reducer';
import searchReducer from './reducers/search.reducer';

const rootReducer = combineReducers({
    search: searchReducer,
    recipes: recipeReducer
});

export default rootReducer;