import "./index.css";

import { items } from "./constants.js";

import Section from "./Section";
import { Card } from "./Card";


const cardsList = new Section({
  data:items,
  renderer: (cardItem)=>{
    const card = new Card(cardItem, '.card-template');
      
    const cardElement = card.generateCard();
    
    cardsList.addItem(cardElement);
      
  }
}, '.cards');

cardsList.renderItems(); 

import { FormValidator } from "./FormValidator.js";


// import { Card } from "./Card.js";

/*
items.forEach((item) => {
  const card = new Card(item, '.card-template');

  const cardElement = card.generateCard();

  cards.append(cardElement);

});

import PopupWithForm from "./PopupWithForm.js";

items.forEach((item) => {
  const card = new PopupWithForm(item, '.card-template');

  const cardElement = card.generateCard();

  cards.append(cardElement);
});
*/




