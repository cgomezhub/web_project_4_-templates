import { profileAvatar, popupAvatar} from '../components/constants';

import Api from './Api';

const api = new Api({ baseUrl: 'https://around.nomoreparties.co/v1/web_es_09',
 headers: {
  authorization: '24db7356-9f7a-470a-979e-9ec3f25f6f02',
  "Content-Type": "application/json"
 }
});

export default class Avatar {
  constructor(user, selectorAvatar) {
    this._selectorAvatar = selectorAvatar;
    this._user = user._id;
    this._userName = user.name;
    this._user = user;


  }

  _getTemplateAvatar() {

    const avatarElement = document.querySelector('#avatar-form').cloneNode(true);

    return avatarElement;
  }

  _generateAvatar() {
    this._element = this._getTemplateAvatar();
    return this._element;
  }


  _close() {
    popupAvatar.classList.remove('active');
  };

  _handleAvatarSubmit(evt) {
    evt.preventDefault();
    // declarar variables del nuevo element ( evento input)

    const inputAvatar = document.querySelector('#url-input-avatar');

    const form = document.querySelector('#avatar-form');

    profileAvatar.src = inputAvatar.value;

    //popupAvatar.classList.remove('active');


    //3. editar el perfil a la la URL

    const avatar = profileAvatar.src;

    const updatedAvatar = { avatar: avatar};

    api.editAvatar(updatedAvatar).then((response)  => {
      console.log(response);
       //this._likes = response.avatar
       //console.log(this._likes);;
    });


    //this._close();
    popupAvatar.classList.remove('active');

    form.reset();
  }


  _setEventListeners() {

    const avatarForm = document.querySelector('#avatar-form');

    document.querySelector('#avatar-form-close')
      .addEventListener('click', this._close);

    popupAvatar.addEventListener('click', (event) => {
      if (event.target === popupAvatar) {
        this._close();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this._close();
      }
    });

    avatarForm.addEventListener('submit', this._handleAvatarSubmit);
  }

  _open() {

    popupAvatar.classList.add('active');

    console.log(this._element);

    // declarar variables del nuevo element (inputs)
   // const inputAvatar = this._element.querySelector('#url-input-avatar');

    // cargar valores alos inputs
    //inputAvatar.value = profileAvatar.src;

    //popupAvatar.append(this._element);


    this._setEventListeners();
  }

}
