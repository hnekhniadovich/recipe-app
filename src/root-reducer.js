import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import recipeReducer from './reducers/recipe.reducer';
import searchReducer from './reducers/search.reducer';
import paginationReducer from './reducers/pagination.reducer';
import likesReducer from './reducers/likes.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['likes']
};

const rootReducer = combineReducers({
    search: searchReducer,
    recipes: recipeReducer,
    pages: paginationReducer,
    likes: likesReducer
});

export default persistReducer(persistConfig, rootReducer);