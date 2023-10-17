
import { popupErase, popupEraseClose, popupEraseConfirm } from "./constants";

export default class Card {
  constructor({link, name}, cardSelector) {
    this._link = link;
    this._name = name;
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

    this._element.querySelector('.card__name').textContent = this._name;
    this._element.querySelector('.card__link').src = this._link;
    this._element.querySelector('.card__link').alt = `imagen de ${this._name}`;

    this._setEventListeners();

    return this._element;
  }

  _like(evt) {
    evt.target.classList.toggle('card__heart_active');
  }



  handleRemoveCard() {
    this._element.style.display = 'none';
  }

  _setEventListeners() {

    this._element
      .querySelector('.card__heart')
      .addEventListener('click', (evt) => {
        this._like(evt);
    });
  }
}

