<<<<<<< HEAD
import { popupsImage, } from '../components/constants';
=======
import { popupsImage, popups } from '../components/constants';
>>>>>>> 0b7eed16f570754b79a31472fe0a4a984f82abda
import Popup from '../components/Popup';

export default class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
  }

  _getTemplatePopup() {
    const test = document.querySelector(this._selectorPopup);

    const popupElement = test.content
      .querySelector('.popup__container')
      .cloneNode(true);

    return popupElement;
  }

  _generatePopup() {
    this._element = this._getTemplatePopup();
    return this._element;
  }

<<<<<<< HEAD

  _close(){

    popupsImage.classList.remove('active');
  }
  _setEventListeners() {
    super.setEventListeners();

    this._element.querySelector('.form__close').addEventListener('click',() =>{
        super.close();
        this._close();

      });

    popupsImage.addEventListener('click', (event) => {
      if (event.target === popupsImage) {
        super.close();
        this._close();


      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        super.close();
        this._close();
      }
    });

=======
  _setEventListeners() {
    super.setEventListeners();

    popupsImage.addEventListener('click', (event) => {
      if (event.target === popupsImage) {
        popupsImage.classList.remove('active');
        popups.classList.remove('active');
      }
    });
>>>>>>> 0b7eed16f570754b79a31472fe0a4a984f82abda
  }

  open({ src, alt, text }) {
    super.open();
    popupsImage.classList.add('active');

    this._element.querySelector('.popup__image').src = src;
    this._element.querySelector('.popup__image').alt = alt;
    this._element.querySelector('.popup__place').textContent = text;

    popupsImage.append(this._element);

    this._setEventListeners();
  }
}
