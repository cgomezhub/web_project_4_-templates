import { popups, popupsAdd, cards } from './constants';

import Popup from './Popup';


import Api from './Api';

const api = new Api({
  baseUrl: 'https://around.nomoreparties.co/v1/web_es_09',
  headers: {
    authorization: '24db7356-9f7a-470a-979e-9ec3f25f6f02',
    'Content-Type': 'application/json',
  },
});

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
    const elementLikeCount = element.querySelector('.card__like-count');



    const buttonAddSave = document.querySelector('#button-add-save');
    const buttonAddSaving = document.querySelector('#button-add-saving');

    const form = document.querySelector('#add-form');

    const textInputPlace = document.querySelector('#text-input-place');
    const urlInputImage = document.querySelector('#url-input-image');

    //agregar datos del formulario ingresados por el usuario para la tarjeta

    elementImage.src = urlInputImage.value;
    elementImage.alt = `imagen de ${urlInputImage.value}`;
    elementPlace.textContent = textInputPlace.value;
    elementHeart.classList.remove('card__heart_active');
    elementTrash.classList.add('card__trash_active');
    elementLikeCount.textContent = '0';

    // 4. agregar nueva tarjeta a la URL

    //construir objeto a agregar

    const link = elementImage.src;
    const name = elementPlace.textContent;


    const newImage = { link: link, name: name};

    buttonAddSave.style.display = 'none';
    buttonAddSaving.style.display = 'block';
    buttonAddSave.style.pointer = 'none';

    api.addCard(newImage).then((response) => {

      //console.log(response);
      buttonAddSave.style.display = 'block';

      buttonAddSaving.style.display = 'none';
      popupsAdd.classList.remove('active');
      popups.classList.remove('active');
      api.getInitialCards();
      form.reset();
      //location.reload();
    });

    // configurar  el boton de me gusta

    elementHeart.addEventListener('click', (evt) => {
      evt.target.classList.toggle('card__heart_active');
    });

    // agregar la tarjeta nueva al Grid

    cards.prepend(element);



    element.style.display = 'flex';
  }

  _close() {
    popupsAdd.classList.remove('active');
  }

  _setEventListeners() {
    const addForm = document.querySelector('#add-form');

    super.setEventListeners();

    this._element
      .querySelector('.form__close')
      .addEventListener('click', () => {
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

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        //this._handleAddFormSubmit();
      }
    });

    addForm.addEventListener('submit', this._handleAddFormSubmit);

    addForm.addEventListener(
      'keydown',
      function (event) {
        if (event.key === 'Enter') {
          event.preventDefault();
          // Evita el comportamiento predeterminado de enviar el formulario
          this._handleAddFormSubmit(event);
        }
      }.bind(this)
    );
  }

  _open() {
    super.open();

    popupsAdd.classList.add('active');

    popupsAdd.append(this._element);

    this._setEventListeners();
  }
}
