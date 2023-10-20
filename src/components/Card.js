
import { popupErase, popupEraseClose, popupEraseConfirm } from "./constants";

import Api from '../components/Api';
import { useFunc } from "ajv/dist/compile/util";

const api = new Api({ baseUrl: 'https://around.nomoreparties.co/v1/web_es_09',
 headers: {
  authorization: '24db7356-9f7a-470a-979e-9ec3f25f6f02',
  "Content-Type": "application/json"
 }
});


export default class Card {
  constructor({link, name, likes}, cardSelector) {
    this._link = link;
    this._name = name;
    this._likes = likes;
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

    //5. mostrar los megusta de una tarjeta desde la URL

    const  cardLikeCount  = this._element.querySelector('.card__like-count');
    cardLikeCount.textContent = this._likes.length;


    /*api.getCardLikes().then(data => {

    cardLikeCount.textContent=data.likes;

    });*/

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
    const cardHeart =  this._element.querySelector('.card__heart');

    cardHeart.addEventListener('click', (evt) => {
        this._like(evt);

        console.log ('paso like');

        if (cardHeart.classList.contains('card__heart_active')) {

          // obtetener el valor de la propiedad name de la URL user

          console.log ('valido corazon');

          api.getUserInfo().then(data => {

            const userName = data.name

            console.log (userName);

            //return userName

          });



          //console.log (userName);

           // cards.likes.push(userName);

             //api.addCardLikes(cards);













        }



    });


  }
}

