import './index.css';

import Section from '../components/Section';
import Card from '../components/Card';

import FormValidator from '../components/FormValidator';
import PopupWithImage from '../components/PopupWithImage';
import PopupWithForm from '../components/PopupWithForm';
import UserInfo from '../components/UserInfo';

import { items, buttonPlace, buttonEdit } from '../components/constants.js';

const cardsList = new Section(
  {
    data: items,
    renderer: (cardItem) => {
      const card = new Card(cardItem, '.card-template');

      const cardElement = card.generateCard();

      cardsList.addItem(cardElement);
    },
  },
  '.cards'
);

cardsList.renderItems();


const popupImg = new PopupWithImage('.popup-image-template');

popupImg._generatePopup();

document.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('card__image')) {
    const p = evt.target.parentElement.querySelector('.card__place');

    const imageInfo = {
      src: evt.target.src,
      alt: evt.target.alt,
      text: p.textContent,
    };

    popupImg.open(imageInfo);
  }
});


const popupAddForm = new PopupWithForm('.popup-form-template');

popupAddForm._generateFormPopup();

buttonPlace.addEventListener('click', () => {
  popupAddForm._open();

  console.log('viene PopupWith');

  const validator = new FormValidator('.form');

  validator.enableValidation();
});


const popupUserForm = new UserInfo('.popup-user-template');

popupUserForm._generateUser();

console.log('entro UserInfo');

buttonEdit.addEventListener('click', () => {
  popupUserForm._open();

  const validator = new FormValidator('.form');

  validator.enableValidation();
});
