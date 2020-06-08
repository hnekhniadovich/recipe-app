import { PaginationActionTypes } from './recipe.types';

export const nextPage = () => ({
    type: PaginationActionTypes.PAGE_NEXT
});

export const prevPage = () => ({
    type: PaginationActionTypes.PAGE_PREV
});