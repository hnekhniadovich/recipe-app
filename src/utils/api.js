import axios from 'axios';

const proxy = 'https://cors-anywhere.herokuapp.com/';
const key = '00acf527af2947beb5754835be7ec3ee';

export const getRecipes = (searchField) => {
    return axios.get(`${proxy}https://api.spoonacular.com/recipes/search?apiKey=${key}&query=${searchField}&number=10`)
        .then((response) => response.data);
};

export const getRecipeInfo = (id) => {
    return axios.get(`${proxy}https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}`)
        .then(response => response.data)
        //.then(response => { console.log(response.data) })  
};

export const getRecipeIngredients = (id) => {
    return axios.get(`${proxy}https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${key}`)
        .then(response => response.data)
        //.then(response => { console.log(response.data) })  
};


