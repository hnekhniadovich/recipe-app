import { ShoppingActionTypes } from '../actions/recipe.types';

const INITIAL_STATE = {
    shoppingList: []
};

const shoppingReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ShoppingActionTypes.ADD_TO_SHOPPING_LIST:
            return {
                ...state,
                shoppingList: [ ...state.shoppingList, ...action.payload]
            };
        case ShoppingActionTypes.DELETE_FROM_SHOPPING_LIST:
            return {
                ...state,
                shoppingList: state.shoppingList.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
};

export default shoppingReducer;