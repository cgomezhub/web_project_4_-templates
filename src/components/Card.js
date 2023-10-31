import { popupErase } from './constants';

import Api from '../components/Api';

const api = new Api({
  baseUrl: 'https://around.nomoreparties.co/v1/web_es_09',
  headers: {
    authorization: '24db7356-9f7a-470a-979e-9ec3f25f6f02',
    'Content-Type': 'application/json',
  },
});

export default class Card {
  constructor(cardItem, user, cardSelector) {
    this._link = cardItem.link;
    this._name = cardItem.name;
    this._likes = cardItem.likes;
    this._ownerId = cardItem.owner._id;
    this._ownerName = cardItem.owner.name;
    this._cardId = cardItem._id;
    this._userId = user._id;
    this._userName = user.name;
    this._user = user;
    this._cardSelector = cardSelector;
    this._cardItem = cardItem;
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



    //5. mostrar los megusta de una tarjeta desde la URL

    //6. y 7. mostrar el basurero solo al ususario

    //console.log(this._userId,this._ownerId)

    if (this._userId === this._ownerId) {
      this._element
        .querySelector('.card__trash')
        .classList.add('card__trash_active');
    };


    /*
    if (this._likes && Array.isArray(this._likes)) {
      const cardLikeCount = this._element.querySelector('.card__like-count');
      cardLikeCount.textContent = this._likes.length;

      if (this._likes.some((like) => like._id === this._userId)) {
        this._element
          .querySelector('.card__heart')
          .classList.add('card__heart_active');
      }
    }*/


    const cardLikeCount = this._element.querySelector('.card__like-count');
    cardLikeCount.textContent = this._likes.length;

    //6. y 7. mostrar el basurero solo al ususario

    //console.log(this._userId,this._ownerId)

    if (this._userId === this._ownerId) {
      this._element
        .querySelector('.card__trash')
        .classList.add('card__trash_active');
    }

    // 8.1 validar con some  en la URL si  ya mi usuario esta esta registrado, es decir qur  le dio like
    // a alguna carta para activar el corzon

    if (this._likes.some((like) => like._id === this._userId)) {
      this._element
        .querySelector('.card__heart')
        .classList.add('card__heart_active');
    }

    this._setEventListeners();

    return this._element;
  }

  ///////////////////////////

  _like(evt) {
    evt.target.classList.toggle('card__heart_active');
  }

  _closePopupErase() {
    popupErase.classList.remove('active');
  }

  _setEventListeners(){

    // 7.  variables de eventos para agregar y eliminar tarjetas

    const cardTrash = this._element.querySelector('.card__trash');
    const popupEraseClose = document.querySelector('.popup-erase__close');
    const popupEraseConfirm = document.querySelector('.popup-erase__confirm');

    const eraseContent = () => {
      const cardId = this._cardId;
     // console.log(idImage);
      //api.eraseCard(idImage);
      api.addOrDeleteCard(cardId, 'DELETE').then((response) => {
        this._element.style.display = 'none';
        popupErase.classList.remove('active');
        });
      }

    cardTrash.addEventListener('click', () => {
      popupErase.classList.add('active');
      popupEraseConfirm.addEventListener('click', eraseContent);
    });

    popupEraseClose.addEventListener('click', () => {
      this._closePopupErase();
      popupEraseConfirm.removeEventListener('click', eraseContent);
    });

    popupErase.addEventListener('click', (event) => {
      if (event.target === popupErase) {
        this._closePopupErase();
      }
      popupEraseConfirm.removeEventListener('click', eraseContent);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this._closePopupErase();
      }
      popupEraseConfirm.removeEventListener('click', eraseContent);
    });

    // 8.2 validar si podemos llamar a la Api que agregar o quitar like

    const cardHeart = this._element.querySelector('.card__heart');


    cardHeart.addEventListener('click', () => {
      const cardId = this._cardId;

      console.log (cardId);
      //console.log (this._likes);


      if (this._likes.some((like) => like._id === this._userId)) {
        api.addOrDeleteLike(cardId, 'DELETE').then((response) => {
          this._likes = response.likes;
          this._element.querySelector('.card__like-count').textContent = this._likes.length;
          this._element.querySelector('.card__heart').classList.remove('card__heart_active');
        });
      } else {
        api.addOrDeleteLike(cardId, 'PUT').then((response) => {
          this._likes = response.likes;
          this._element.querySelector('.card__like-count').textContent = this._likes.length;
          this._element.querySelector('.card__heart').classList.add('card__heart_active');
        });
      }
    });

      // si ya esta activado entoces, borrar el like de la URL
      /*
      if (this._likes.some((like) => like._id === this._userId)) {
        //console.log ("no entro", this._likes);
        //console.log (this._userId);
        api.deleteCardLikes(cardId).then((response) => {
          //console.log(response);
          this._likes = response.likes;
          //console.log(this._likes);
          this._element.querySelector('.card__like-count').textContent =
            this._likes.length;
          this._element
            .querySelector('.card__heart')
            .classList.remove('card__heart_active');
        });
      }
      // si no esta activado, entoces agregar el like a la URL
      else {
        //console.log("entro");
        //console.log (this._likes);

        api.addCardLikes(cardId).then((response) => {
          //console.log("req",response);
          // console.log(       this._element, this._element.querySelector('.card__like-count')
          // )
          // console.log(this._likes, this._likes.length)
          this._likes = response.likes;
          //console.log(this._likes, this._likes.length)
          this._element.querySelector('.card__like-count').textContent =
            this._likes.length;
          this._element
            .querySelector('.card__heart')
            .classList.add('card__heart_active');
          //console.log (this._element.querySelector('.card__like-count'));
        });
      }


    });*/


  }
}
