import axios from 'axios';

const proxy = 'https://cors-anywhere.herokuapp.com/';
const key = process.env.REACT_APP_API_KEY;

export const getRecipes = (searchField) => {
    return axios.get(`${proxy}https://api.spoonacular.com/recipes/search?apiKey=${key}&query=${searchField}&number=100`)
        .then((response) => response.data)
        .catch(error => alert('Something wrong with the search...'));
};

export const getRecipeInfo = (id) => {
    return axios.get(`${proxy}https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}`)
        .then(response => response.data)
        .catch(error => alert('Something wrong with the search...'));
};

export const getRecipeIngredients = (id) => {
    return axios.get(`${proxy}https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${key}`)
        .then(response => response.data)
        .catch(error => alert('Something wrong with the search...'));
};


