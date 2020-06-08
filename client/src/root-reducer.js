import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import recipeReducer from './reducers/recipe.reducer';
import recipesReducer from './reducers/recipes.reducer';
import searchReducer from './reducers/search.reducer';
import paginationReducer from './reducers/pagination.reducer';
import likesReducer from './reducers/likes.reducer';
import shoppingReducer from './reducers/shopping.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['likesList']
};

const rootReducer = combineReducers({
    search: searchReducer,
    recipes: recipesReducer,
    recipe: recipeReducer,
    pages: paginationReducer,
    likesList: likesReducer,
    shoppingList: shoppingReducer
});

export default persistReducer(persistConfig, rootReducer);