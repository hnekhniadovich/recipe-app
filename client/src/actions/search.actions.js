import { SearchActionTypes } from './recipe.types';

export const setSearchField = (value) => ({
    type: SearchActionTypes.CHANGE_SEARCHFIELD,
    payload: value
});