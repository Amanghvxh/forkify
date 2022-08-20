import parentView from './view';

class resultsView extends parentView {
  _errorMessage = 'No results found. Please try another recipe! from results';
  _successMessage = '';
  _parentEl = document.querySelector('.results');

  _generateHTML() {
    return this._data.map(data => this._searchResults(data)).join('');
  }
  _searchResults(data) {
    return `<li class="preview">
            <a class="preview__link" href="#${data.id}">
              <figure class="preview__fig">
                <img src="${data.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${data.title}</h4>
                <p class="preview__publisher">${data.publisher}</p>
                <div class="preview__user-generated">
                  
                </div>
              </div>
            </a>
          </li>`;
  }
}
export default new resultsView();
