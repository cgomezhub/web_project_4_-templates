const popupProfile = document.getElementById('popup-profile');
const profileFormClose = document.querySelector('.form__close');
const profileFormInputName = document.querySelector('#text-input-name');
const profileFormInputAbout = document.querySelector('#text-input-about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const buttonEdit = document.querySelector('.button-edit');
const buttonPlace = document.querySelector('.button-place');

const popupAdd = document.getElementById('popup-add');
const popupAddClose = document.getElementById('add-form-close');

const popupAddInputPlace = document.querySelector('#text-input-place');
const popupAddInputHttps = document.querySelector('#url-input-image');

const cards = document.querySelector('.cards');
const cardLink = document.querySelector('.card__link');
const cardName = document.querySelector('.card__name');

const popupImageSelector = document.getElementById('popup-image');
const popupImage = document.querySelector('.popup__image');
const popupPlace = document.querySelector('.popup__place');
const imagesExpandClose = document.querySelector('.images-expand__close');

const formSelector = document.querySelector('.form');
const inputSelector = document.querySelector('.form__input');

const popup = document.querySelector('.popup');

const popups = document.querySelector('.popups');
const popupsImage = document.querySelector('.popups__image');
const popupsAdd = document.querySelector('.popups__add');
const popupsUserInfo = document.querySelector('.popups-user-info');

const popupErase = document.querySelector('.popup-erase');
const popupEraseConfirm = document.querySelector('.popup-erase__confirm');

const inputName = document.querySelector('#text-input-name');
const inputJob = document.querySelector('#text-input-about');

const profileAvatar = document.querySelector('.profile__avatar');
const popupAvatar = document.querySelector('.popup-avatar');

const profileAvatarEdit = document.querySelector('.profile__avatar-edit');

const buttonAvatarSave = document.querySelector('#button-avatar-save');
const buttonAvatarSaving = document.querySelector('#button-avatar-saving');

export {
  buttonEdit,
  popupProfile,
  profileFormClose,
  profileFormInputName,
  profileFormInputAbout,
  buttonPlace,
  popupAdd,
  popupAddClose,
  popupAddInputPlace,
  popupAddInputHttps,
  cards,
  popupImageSelector,
  popupImage,
  popupPlace,
  imagesExpandClose,
};

export { formSelector, inputSelector };

export { cardLink, cardName };
export { popup };
export { popups, popupsImage, popupsAdd, popupsUserInfo };

export {
  profileName,
  profileAbout,
  profileAvatar,
  popupAvatar,
  profileAvatarEdit,
};

export { popupErase, popupEraseConfirm };

export { inputName, inputJob };

export { buttonAvatarSave, buttonAvatarSaving };
