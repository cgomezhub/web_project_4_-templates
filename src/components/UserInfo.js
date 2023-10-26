import { popupsUserInfo, profileName, profileAbout, } from '../components/constants';

import Api from './Api';

const api = new Api({ baseUrl: 'https://around.nomoreparties.co/v1/web_es_09',
 headers: {
  authorization: '24db7356-9f7a-470a-979e-9ec3f25f6f02',
  "Content-Type": "application/json"
 }
});

export default class UserInfo {
  constructor(selectorUser) {
    this._selectorUser = selectorUser;
  }

  _getTemplateUser() {
    const test = document.querySelector(this._selectorUser);

    const userElement = test.content
      .querySelector('#profile-form')
      .cloneNode(true);

    return userElement;
  }

  _generateUser() {
    this._element = this._getTemplateUser();
    return this._element;
  }

  _handleUserFormSubmit(evt) {
    evt.preventDefault();

    // declarar variables del nuevo element ( evento input)
    const inputName = document.querySelector('#text-input-name');
    const inputJob = document.querySelector('#text-input-about');
    const form = document.querySelector('#profile-form');

    profileName.textContent = inputName.value;
    profileAbout.textContent = inputJob.value;

    const buttonUserSave  = document.querySelector("#button-user-save");
    const buttonUserSaving  = document.querySelector("#button-user-saving");


    //3. editar el perfil desde la URL

    const name = profileName.textContent;
    const about = profileAbout.textContent;

    const updatedData = { name: name, about: about};

    buttonUserSaving.style.display = "block";

    buttonUserSave.style.display = "none";


    api.editPerfil(updatedData).then((response)  => {
      console.log(response);
      buttonUserSave.style.display = "block";
      buttonUserSaving.style.display = "none";
      popupsUserInfo.classList.remove('active');

    });

    form.reset();
  }

  _close() {
    popupsUserInfo.classList.remove('active');
  }

  _setEventListeners() {
    const profileForm = document.querySelector('#profile-form');

    this._element
      .querySelector('.form__close')
      .addEventListener('click', this._close);

    popupsUserInfo.addEventListener('click', (event) => {
      if (event.target === popupsUserInfo) {
        this._close();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this._close();
      }
    });

    profileForm.addEventListener('submit', this._handleUserFormSubmit);
  }

  _open() {
    popupsUserInfo.classList.add('active');

    console.log(this._element);

    // declarar variables del nuevo element (inputs)
    const inputName = this._element.querySelector('#text-input-name');
    const inputJob = this._element.querySelector('#text-input-about');

    // cargar valores alos inputs
    inputName.value = profileName.textContent;
    inputJob.value = profileAbout.textContent;

    popupsUserInfo.append(this._element);

    this._setEventListeners();
  }

}
