import icons from 'url:../../img/icons.svg';

export default class parentView {
  _data;
  _parentEl = document.querySelector('.recipe');
  _errorMessage = 'No results found. Please try another recipe!';
  _successMessage = '';

  renderError(message = this._errorMessage) {
    const html = `<div class="error">
      <div>
      <svg>
      <use href="${icons}#icon-alert-triangle"></use>
      </svg>
      </div>
      <p>${message}</p>
      </div>`;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', html);
  }
  renderSuccess(message = this._successMessage) {
    const html = `<div class="success">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', html);
  }
  renderSpinner() {
    let html = `<div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>`;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', html);
  }

  renderRecipe(recipe) {
    this._data = recipe;
    const html = this._generateHTML();
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', html);
  }
  _clear() {
    this._parentEl.innerHTML = '';
  }
}
