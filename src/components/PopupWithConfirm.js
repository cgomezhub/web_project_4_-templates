import { popupErase,} from "./constants";

export default class PopupWithConfirm {

  constructor(selectorConfirm) {
    this._selectorConfirm = selectorConfirm;

  }

  _getTemplateConfirm() {
    const test = document.querySelector(this._selectorConfirm);

    const confirmElement = test.content
      .querySelector('.popup-erase__container')
      .cloneNode(true);

    return confirmElement;
  }

  _generateConfirm() {
    this._element = this._getTemplateConfirm();
    return this._element;
  }



  _closePopupErase(){
    popupErase.classList.remove('active');

  }


  _setEventListeners() {

    const popupErase = document.querySelector('.popup-erase');
    const popupEraseClose = this._element.querySelector('.popup-erase__close');
    const popupEraseConfirm = this._element.querySelector(".popup-erase__confirm");

    const card = document.querySelector('.card');

    popupEraseClose.addEventListener('click', () => {
      this._closePopupErase();
    });

    popupErase.addEventListener('click', (event) => {
      if (event.target === popupErase) {
        this._closePopupErase();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this._closePopupErase();
      }
    });

    popupEraseConfirm.addEventListener('click', () => {

      card.style.display = 'none';
      this._closePopupErase();
    });
  }

  _open() {

    console.log ('paso 1');
    popupErase.classList.add('active');

    popupErase.append(this._element);

    this._setEventListeners();
  }

}
