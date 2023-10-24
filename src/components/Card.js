
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
    //this._likesId = cardItem.likes._id;
    this._ownerId = cardItem.owner._id;
    this._ownerName = cardItem.owner.name;
    this._cardId = cardItem._id;
    this._userId = user._id;
    this._userName = user.name;
    this._user = user;
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
      console.log("entro,",this._element.querySelector('.card__trash'))
    }

    // 8.1 validar con some  en la URL si  ya mi usuario esta esta registrado, es decir qur  le dio like a alguna carta

   // this._likes.forEach(like => { console.log(like._id); });

    //console.log(this._likesId);
    this._likes.forEach(like => { console.log(like._id); });
    console.log(this._userId);

    if (this._likes.some(like => { like._id === this._userId })) {

      console.log(like._id);
      console.log(this._userId);
      this._element.querySelector('.card__heart').classList.add('card__heart_active');
      console.log("entro,",this._element.querySelector('.card__heart').classList.add('card__heart_active'));

    }


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


   // 8.2 validar si podemos llamar a la Api que agrega like

   const cardHeart =  this._element.querySelector('.card__heart');

   cardHeart.addEventListener('click', (evt) => {
      this._like(evt);

      console.log ('paso like');

      console.log (this._likes);

      console.log (this._userId);

      // this._likes.forEach(like => { console.log(like._id); });

      const  cardId = this._cardId

      console.log (cardId);

      if (this._likes.some(like => { like._id === this._userId }) ) {
        console.log (like._id);
        console.log (this._userId);

        this._element.querySelector('.card__like-count').textContent = this._likes.length;
        console.log (this._element.querySelector('.card__like-count'));

        api.deleteCardLikes(cardId).then((user)  => {
           this._likes = user
           this._element.querySelector('.card__like-count').textContent = this._likes.length;
           this._element.querySelector('.card__heart').classList.remove('card__heart_active');
        });
      }
      else /*if (!this._likes.some(like => { like._id === this._userId }) ) */{

        console.log(this._userId);


        api.addCardLikes(cardId) .then((user)  => {
          this._likes= user
        this._element.querySelector('.card__like-count').textContent = this._likes.length;
        this._element.querySelector('.card__heart').classList.remove('card__heart_active');


        console.log (this._element.querySelector('.card__like-count'));
        });
      };
    });

  }


  _handleRemoveCard() {

    // variables para eventos del popup - erase

    const cardTrash = this._element.querySelector('.card__trash');
    const popupEraseClose = document.querySelector('.popup-erase__close');
    const popupEraseConfirm = document.querySelector(".popup-erase__confirm");


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

