import { profileAvatar, popupAvatar, buttonAvatarSave, buttonAvatarSaving} from '../components/constants';

import Api from './Api';

const api = new Api({ baseUrl: 'https://around.nomoreparties.co/v1/web_es_09',
 headers: {
  authorization: '24db7356-9f7a-470a-979e-9ec3f25f6f02',
  "Content-Type": "application/json"
 }
});

export default class Avatar {
  constructor(selectorAvatar) {
    this._selectorAvatar = selectorAvatar;

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

  renderLoading(isLoading) {
    if (isLoading) {
        buttonAvatarSave.style.display = "none";
        buttonAvatarSaving.style.display = "block";

    } else {
      buttonAvatarSave.style.display = "block";
      buttonAvatarSaving.style.display = "none";
    }
  }

  _handleAvatarSubmit(evt) {
    evt.preventDefault();
    // declarar variables del nuevo element ( evento input)

    const inputAvatar = document.querySelector('#url-input-avatar');

    const form = document.querySelector('#avatar-form');

    profileAvatar.src = inputAvatar.value;

    //3. editar el perfil a la la URL

    const avatar = profileAvatar.src;

    const updatedAvatar = { avatar: avatar};

    //this.renderLoading(true);

    buttonAvatarSave.style.display = "none";
    buttonAvatarSaving.style.display = "block";

    api.editAvatar(updatedAvatar).then((response)  => {
      //console.log(response);
      buttonAvatarSave.style.display = "block";
      buttonAvatarSaving.style.display = "none";
      popupAvatar.classList.remove('active');

    });

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

    this._setEventListeners();
  }

}
