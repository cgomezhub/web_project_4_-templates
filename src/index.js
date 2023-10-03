import "./index.css";

import { cardImage, items, popupImage } from "./constants.js";

//import Popup from "./Popup";
//import PopupWithImage from "./PopupWithImage";
import Section from "./Section";
import Card from "./Card";


import { FormValidator } from "./FormValidator.js";
import PopupWithImage from "./PopupWithImage";


const cardsList = new Section({
  data:items,
  renderer: (cardItem)=>{

    const card = new Card(cardItem, '.card-template');
      
    const cardElement = card.generateCard();
    
    cardsList.addItem(cardElement);
      
  }
}, '.cards');

cardsList. renderItems(); 

/*

document.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('card__image')){
    const imageInfo = {
      src: evt.target.src,
      alt: evt.target.alt,
    };
    const popupImage = new PopupWithImage(imageInfo, '.popups');
    console.log('inicia popupWithImage');
    popupImage.open();
  }
});
*/

const popupImg = new PopupWithImage( '.popup-image-template');

document.addEventListener('click', (evt) => {
  
  if (evt.target.classList.contains('card__image')){
    
    const p = evt.target.parentElement.querySelector(".card__place")

    const imageInfo = {
      src: evt.target.src,
      alt: evt.target.alt,
      text : p.textContent
    };
    console.log('inicia popupWithImage');
    popupImg.open(imageInfo);
  }
  
});







/*

// para verificar los formularios:

import PopupWithForm from "./PopupWithForm.js";

items.forEach((item) => {
  const card = new PopupWithForm(item, '.card-template');

  const cardElement = card.generateCard();

  cards.append(cardElement);
});

*/