import { ShoppingActionTypes } from '../actions/recipe.types';

export const addToShoppingList  = (ingredients) => ({
    type: ShoppingActionTypes.ADD_TO_SHOPPING_LIST,
    payload: ingredients
});

export const deleteFromShoppingList  = (id) => ({
    type: ShoppingActionTypes.DELETE_FROM_SHOPPING_LIST,
    payload: id
});