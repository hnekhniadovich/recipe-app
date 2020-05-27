import axios from 'axios';

const proxy = 'https://cors-anywhere.herokuapp.com/';
const key = 'a3e81828af874e18b3d0e2bb0d9960de';

export const getRecipes = (searchField) => {
    return axios.get(`${proxy}https://api.spoonacular.com/recipes/search?apiKey=${key}&query=${searchField}&number=10`)
        .then((response) => response.data)
        .then((response) => console.log(response.results))
        .catch((error) => console.log(error));
}

