
import { imagesExpand, imagesExpandImage, imagesExpandPlace,imagesExpandClose } from "../utils/constants.js";

export class Card {
  constructor(data, cardSelector) {
    this._image = data.image;
    this._altImage = data.altImage;
    this._place = data.place;
    this._heart = data.heart;
    this._altHeart = data.altHeart;
    this._trash = data.trash;
    this._altTrash = data.altTrash;
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
    this._element.querySelector('.card__heart').src = this._heart;
    this._element.querySelector('.card__heart').alt = this._altHeart;
    this._element.querySelector('.card__trash').src = this._trash;
    this._element.querySelector('.card__trash').alt = this._altTrash;

    this._setEventListeners();

    return this._element;
  }

  _handleOpenExpand() {
    imagesExpand.classList.add('active');
    imagesExpandImage.src = this._image;
    imagesExpandImage.alt = this._altImage;
    imagesExpandPlace.textContent = this._place;
  }

  _handleRemoveExpand() {
    imagesExpand.classList.remove('active');
  }

  _like(evt) {
    evt.target.classList.toggle('card__heart_active');
  }

  _handleRemoveCard() {
    this._element.style.display = 'none';
  }

  _setEventListeners() {
    this._element
      .querySelector('.card__image')
      .addEventListener('click', () => {
        this._handleOpenExpand();
      });

    imagesExpandClose.addEventListener('click', () => {
      this._handleRemoveExpand();
    });

    imagesExpand.addEventListener('click', () => {
      this._handleRemoveExpand();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this._handleRemoveExpand();
      }
    });

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

