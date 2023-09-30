const buttonEdit = document.querySelector('.button-edit');
const popupProfile = document.getElementById('popup-profile');
const profileFormClose = document.querySelector('.form__close');
const profileFormInputName = document.getElementById('text-input-name');
const profileFormInputAbout = document.getElementById('text-input-about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const buttonPlace = document.querySelector('.button-place');
const popupAdd = document.getElementById('popup-add');
const popupAddClose = document.getElementById('add-form-close');
const popupAddInputPlace = document.getElementById('text-input-place');
const popupAddInputHttps = document.getElementById('url-input-image');

const popupAddForm = document.getElementById('add-form');

const profileForm = document.getElementById('profile-form');

const cards = document.querySelector('.cards');
const popupImage = document.getElementById('popup-image');
const imagesExpandImage = document.querySelector('.images-expand__image');
const imagesExpandPlace = document.querySelector('.images-expand__place');
const imagesExpandClose = document.querySelector('.images-expand__close');

const formSelector = document.querySelector('.form');
const inputSelector = formSelector.querySelector('.form__input');


const items = [
    {
      image:
        'https://images.unsplash.com/photo-1666831268439-376e34c4de0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
      altImage: 'imagen de la Montana de Yosemite',
      place: 'Montana de Yosemite',
    },
    {
      image:
        'https://images.unsplash.com/photo-1618595723314-c54d51d6e043?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1220&q=80',
      altImage: 'imagen de Los Arcos',
      place: 'Los Arcos',
    },
    {
      image:
        'https://images.unsplash.com/photo-1657589809154-8212431ee6c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      altImage: 'imagen del Canon Bryce',
      place: 'Canon Bryce',
    },
    {
      image:
        'https://images.unsplash.com/photo-1615405147358-f17791e21fcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      altImage: 'imagen del parque nacional Zion',
      place: 'Parque Nacional Zion',
    },
    {
      image:
        'https://images.unsplash.com/photo-1678806922638-27bf485490ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80',
      altImage: 'imagen del parque nacional Denali',
      place: 'Parque Nacional Denali',
    },
  
    {
      image:
        'https://images.unsplash.com/photo-1643252494989-81cd0b5bead2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      altImage: 'imagen del gran canon',
      place: 'Gran Canon',
    },
];

export { buttonEdit, popupProfile, profileFormClose,profileFormInputName, profileFormInputAbout,profileName, profileAbout, buttonPlace, popupAdd,popupAddClose, popupAddInputPlace, popupAddInputHttps, popupAddForm, profileForm, cards, popupImage, imagesExpandImage, imagesExpandPlace, imagesExpandClose};

export {formSelector, inputSelector};
export { items};