
import { popupImageSelector, popupImage, popupPlace, profileFormClose } from "./constants.js";
//import PopupWithImage from "./PopupWithImage.js";

export default class Card {
  constructor({image, place, altImage}, cardSelector) {
    this._image = image;
    this._altImage = altImage;
    this._place = place;
    this._cardSelector = cardSelector;
    //this._popupWithImage = new PopupWithImage({image, place, altImage});
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
/*
  _handleOpenExpand() {
    popupImage.classList.add('active');
    popupImageImage.src = this._image;
    popupImageImage.alt = this._altImage;
    popupImagePlace.textContent = this._place;
  }
*/
/*
  _handleRemoveExpand() {
    popupImage.classList.remove('active');
  }
  */
/*
  openPopup() {
    this._popupWithImage.open();
  }*/
  

  _like(evt) {
    evt.target.classList.toggle('card__heart_active');
  }

  _handleRemoveCard() {
    this._element.style.display = 'none';
  }

  _setEventListeners() {
/*
   this._element
      .querySelector('.card__image')
      .addEventListener('click', () => {
        this.openPopup();
        this.
      });*/
    
      /*
    profileFormClose.addEventListener('click', () => {
      this._handleRemoveExpand();
    });
    
    popupImage.addEventListener('click', () => {
      this._handleRemoveExpand();
    });*/

    /*document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this._handleRemoveExpand();
      }
    });*/
    /*
    this._element
      .querySelector('.card__image')
      .addEventListener('click', () => {
        this.openPopup();
      });*/

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

