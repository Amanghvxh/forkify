import parentView from './view';
class searchView extends parentView {
  _errorMessage = 'No results found. Please try another recipe!';
  _successMessage = '';
  _parentEl = document.querySelector('.search');
  _searchEl = this._parentEl.querySelector('.search__field');
  getSearchValue() {
    const value = this._searchEl.value;
    this._clearInput();
    return value;
  }
  _clearInput() {
    this._searchEl.value = '';
  }
  addHandlerSearch(listener) {
    this._parentEl.addEventListener('submit', e => {
      e.preventDefault();
      listener();
    });
  }
}
export default new searchView();
