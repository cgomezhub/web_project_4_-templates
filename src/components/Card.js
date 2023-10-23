
import { popupErase, popupEraseClose, popupEraseConfirm } from "./constants";

import Api from '../components/Api';


const api = new Api({ baseUrl: 'https://around.nomoreparties.co/v1/web_es_09',
 headers: {
  authorization: '24db7356-9f7a-470a-979e-9ec3f25f6f02',
  "Content-Type": "application/json"
 }
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
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector('.card')
      .cloneNode(true);

      console.log(cardElement);

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


    //6. y 7. mostrar el basurero solo al ususario

    console.log(this._userId,this._ownerId)

    if(this._userId === this._ownerId){
      //this._element.querySelector('.card__trash').style.display = 'block';
      this._element.querySelector('.card__trash').classList.add('card__trash_active');
      console.log("entro,",this._element.querySelector('.card__trash'))
    }

    if (this._likes.some( (like) => { like._id === this._userId }) ) {

      this._element.querySelector('.card__heart').classList.add('card__heart_active');
    }



    // validar si like de la card some fue echo por mi usuario



    this._handleLikes();
    this._handleRemoveCard();

    return this._element;
  }

  ///////////////////////////

  _like(evt) {
    evt.target.classList.toggle('card__heart_active');
  }

  _closePopupErase(){
    popupErase.classList.remove('active');
  }


  _handleLikes() {

    const cardHeart =  this._element.querySelector('.card__heart');

    cardHeart.addEventListener('click', (evt) => {
        this._like(evt);

        const likeArray = this._likes

        console.log(likeArray);

        const userName = this._userName

        console.log(userName);

        const cardId = this._cardId;

        console.log(userLike);


        console.log ('paso like');

        // validar

        if (cardHeart.classList.contains('card__heart_active')) {

          // obtetener el valor de la propiedad name de la URL user

          console.log ('valido corazon active');

          api.addCardLikes(cardId);

           // cards.likes.push(userName);

          // cardLikeCount.textContent = this._likes.length;



        }



    });
  }


  _handleRemoveCard() {

    // variables para eventos del popup - erase

    const cardTrash = this._element.querySelector('.card__trash');
    const popupEraseClose = document.querySelector('.popup-erase__close');
    const popupEraseConfirm = document.querySelector(".popup-erase__confirm");


    console.log(this._element);


    const eraseContent = () => {
      const idImage = this._cardId;
      console.log(idImage);
      api.eraseCard(idImage);
      popupErase.classList.remove('active');
      this._element.style.display = 'none';
    };

    cardTrash.addEventListener('click', () => {
      popupErase.classList.add('active');
      popupEraseConfirm.addEventListener('click', eraseContent);
    });



    popupEraseClose.addEventListener('click', () => {


      this._closePopupErase();
      popupEraseConfirm.removeEventListener('click', eraseContent);


    })

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
  }


}

