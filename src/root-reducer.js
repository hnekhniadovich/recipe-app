import { combineReducers } from 'redux';
import recipeReducer from './reducers/recipe.reducer';
import searchReducer from './reducers/search.reducer';
import paginationReducer from './reducers/pagination.reducer';

const rootReducer = combineReducers({
    search: searchReducer,
    recipes: recipeReducer,
    pages: paginationReducer
});

export default rootReducer;