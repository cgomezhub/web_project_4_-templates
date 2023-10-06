
export default class Card {
  constructor({image, place, altImage}, cardSelector) {
    this._image = image;
    this._altImage = altImage;
    this._place = place;
    this._cardSelector = cardSelector;

  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector('.card__place').textContent = this._place;
    this._element.querySelector('.card__image').src = this._image;
    this._element.querySelector('.card__image').alt = this._altImage;

    this._setEventListeners();

    return this._element;
  }

  _like(evt) {
    evt.target.classList.toggle('card__heart_active');
  }

  _handleRemoveCard() {
    this._element.style.display = 'none';
  }

  _setEventListeners() {

    this._element
      .querySelector('.card__heart')
      .addEventListener('click', (evt) => {
        this._like(evt);
    });

    this._element
      .querySelector('.card__trash')
      .addEventListener('click', () => {
        this._handleRemoveCard();
      });
  }
}

