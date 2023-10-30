import { popupsImage } from '../components/constants';
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

  _close() {
    popupsImage.classList.remove('active');
  }
  _setEventListeners() {
    super.setEventListeners();

    this._element
      .querySelector('.form__close')
      .addEventListener('click', () => {
        super.close();
        this._close();
      });

    popupsImage.addEventListener('click', (event) => {
      const popupContainer = document.querySelector('.popup__container');

      if (event.target === popupsImage || popupContainer) {
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
