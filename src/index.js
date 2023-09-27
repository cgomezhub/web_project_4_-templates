
import { cards, elements } from "./constants.js";


import { Card } from "./Card.js";


elements.forEach((item) => {
  const card = new Card(item, '.card-template');

  const cardElement = card.generateCard();

  cards.append(cardElement);
});



import { FormValidator } from "./FormValidator.js";



