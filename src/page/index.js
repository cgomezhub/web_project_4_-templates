import './index.css';

import Section from '../components/Section';
import Card from '../components/Card';

import FormValidator from '../components/FormValidator';
import PopupWithImage from '../components/PopupWithImage';
import PopupWithForm from '../components/PopupWithForm';
import UserInfo from '../components/UserInfo';
import Avatar from '../components/Avatar';

import Api from '../components/Api';

import { buttonPlace, buttonEdit, profileAvatarEdit } from '../components/constants';


import { profileName, profileAbout, profileAvatar} from "../components/constants";


const api = new Api({ baseUrl: 'https://around.nomoreparties.co/v1/web_es_09',
 headers: {
  authorization: '24db7356-9f7a-470a-979e-9ec3f25f6f02',
  "Content-Type": "application/json"
 }
});

// 1. obtener datos del usuario de la URL y 2. obtener y cargar las tarjetas desde la URL
api.getInitialCards().then((data) => {
  api.getUserInfo() .then((user)  => {
    profileName.textContent = user.name;
    profileAbout.textContent = user.about;
    profileAvatar.src = user.avatar;


    console.log(data,user);


   const cardsList = new Section(
    {
      data: data,
      renderer: (cardItem) => {
        const card = new Card(cardItem, user, '.card-template');

        console.log(cardItem);

        const cardElement = card.generateCard();

        cardsList.addItem(cardElement);
      },
    },
    '.cards'
  );


  cardsList.renderItems();



});
});


//Popup formulario para Informacion del Usuario


const popupUserForm = new UserInfo('.popup-user-template');

popupUserForm._generateUser();



buttonEdit.addEventListener('click', () => {

    popupUserForm._open();

    const validator = new FormValidator('.form');

    validator.enableValidation();
});


//Popup formulario para cambiar el avatar

const popupAvatarForm = new Avatar('.popup-Avatar');

popupAvatarForm._generateAvatar();


profileAvatarEdit.addEventListener('click', () => {

    popupAvatarForm._open();


});





// Popup  zoon de la imagen de la card

const popupImg = new PopupWithImage('.popup-image-template');

popupImg._generatePopup();

document.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('card__link')) {
    const p = evt.target.parentElement.querySelector('.card__name');

    const imageInfo = {
      src: evt.target.src,
      alt: evt.target.alt,
      text: p.textContent,
    };

    popupImg.open(imageInfo);
  }
});



// Popup formulario de crear cartas

const popupAddForm = new PopupWithForm('.popup-form-template');

popupAddForm._generateFormPopup();

buttonPlace.addEventListener('click', () => {
  popupAddForm._open();

  console.log('viene PopupWith');

  const validator = new FormValidator('.form');

  validator.enableValidation();
});
