import { API_URL } from './config.js';
import { fetchApi } from './helper.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    searchResults: [],
  },
};

export const loadRecipe = async function (id) {
  try {
    const recipe = await fetchApi(id);
    console.log(recipe);
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      image: recipe.image_url,
      sourceUrl: recipe.source_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    throw err;
  }
};

export const searchResults = async function (query) {
  try {
    const apiCall = await fetch(`${API_URL}?search=${query}`);
    const searchData = await apiCall.json();
    console.log(apiCall, searchData);
    searchData.data.recipes.map(rec =>
      state.search.searchResults.push({
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      })
    );
    return searchData.results;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
