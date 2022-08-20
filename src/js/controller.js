import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as modelJs from './model.js';
import recepieView from './view/recepieView.js';
import searchView from './view/searchView.js';
import resultsView from './view/resultsView.js';

// https://forkify-api.herokuapp.com/v2

/////////////////////////////////////
/////////////////////////////////////

if (module.hot) {
  module.hot.accept();
}

const getRecepie = async function () {
  try {
    recepieView.renderSpinner();
    const id = window.location.hash.slice(1);
    if (!id) return;
    // render spinner

    //load recepie
    await modelJs.loadRecipe(id);

    //render recepie
    recepieView.renderRecipe(modelJs.state.recipe);
  } catch (err) {
    recepieView.renderError();
  }
};

const searchResults = async function () {
  try {
    resultsView.renderSpinner();
    const query = searchView.getSearchValue();
    if (!query) throw new Error('Input value not found');

    const results = await modelJs.searchResults(query);
    if (!results) return resultsView.renderError();

    resultsView.renderRecipe(modelJs.state.search.searchResults);
    modelJs.state.search.searchResults = [];
  } catch (err) {
    console.log(err);
    resultsView.renderError('Input value not found');
  }
};

const init = function (getRecepie, searchResults) {
  recepieView.listenHandler(getRecepie);
  searchView.addHandlerSearch(searchResults);
};
init(getRecepie, searchResults);
