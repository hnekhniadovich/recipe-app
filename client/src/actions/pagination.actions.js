import { PaginationTypes } from './recipe.types';

export const nextPage = () => ({
    type: PaginationTypes.PAGE_NEXT
});

export const prevPage = () => ({
    type: PaginationTypes.PAGE_PREV
});