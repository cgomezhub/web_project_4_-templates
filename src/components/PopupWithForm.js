import { popups, popupsAdd, cards,  } from './constants';

import Popup from './Popup';

export default class PopupWithForm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  _getInputValues() {
    const inp = document.querySelector(this._selectorPopup);

    const popupElement = inp.content.querySelector('#add-form').cloneNode(true);

    return popupElement;
  }

  _generateFormPopup() {
    this._element = this._getInputValues();

    return this._element;
  }

  _handleAddFormSubmit(evt) {
    evt.preventDefault();

    // clonar nodo  para marco de la tarjeta (element)
    const element = document.querySelector('.card').cloneNode(true);

    // variables para eventos

    const elementImage = element.querySelector('.card__link');
    const elementPlace = element.querySelector('.card__name');
    const elementHeart = element.querySelector('.card__heart');
    const elementTrash = element.querySelector('.card__trash');
    const form = document.querySelector('#add-form');

    const textInputPlace = document.querySelector('#text-input-place');
    const urlInputImage = document.querySelector('#url-input-image');

    //agregar datos del formulario ingresados por el usuario a la tarjeta

    elementImage.src = urlInputImage.value;
    elementImage.alt = `imagen de ${urlInputImage.value}`;
    elementPlace.textContent = textInputPlace.value;
    elementHeart.classList.remove('card__heart_active');

    // configurar  el boton de me gusta

    elementHeart.addEventListener('click', (evt) => {

      evt.target.classList.toggle('card__heart_active');
    });

    // configurar eliminar tarjeta

    elementTrash.addEventListener('click', () => {
      element.style.display = 'none';
    });

    // agregar la tarjeta nueva al Grid

    cards.prepend(element);

    // cerrar la ventana emergente al enviar el formulario

    popupsAdd.classList.remove('active');

    popups.classList.remove('active');

    form.reset();

    element.style.display = 'flex';
  }

  _close(){

    popupsAdd.classList.remove('active');
  }

  _setEventListeners() {
    const addForm = document.querySelector('#add-form');

    super.setEventListeners();

    this._element.querySelector('.form__close').addEventListener('click',() =>{
      super.close();
      this._close();


    });


    popupsAdd.addEventListener('click', (event) => {
      if (event.target === popupsAdd) {
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

    addForm.addEventListener('submit', this._handleAddFormSubmit);
  }

  _open() {
    super.open();

    popupsAdd.classList.add('active');

    popupsAdd.append(this._element);

    this._setEventListeners();
  }
}
