/*import { popupErase,} from "./constants";

import Api from "./Api";

const api = new Api({ baseUrl: 'https://around.nomoreparties.co/v1/web_es_09',
 headers: {
  authorization: '24db7356-9f7a-470a-979e-9ec3f25f6f02',
  "Content-Type": "application/json"
 }
});



export default class PopupWithConfirm {

  constructor(selectorConfirm) {
    this._selectorConfirm = selectorConfirm;

  }

  _getTemplateConfirm() {
    const test = document.querySelector(this._selectorConfirm);

    const confirmElement = test.content
      .querySelector('.popup-erase__container')
      .cloneNode(true);

    return confirmElement;
  }

  _generateConfirm() {
    this._elementC = this._getTemplateConfirm();
    return this._elementC;
  }



  _closePopupErase(){
    popupErase.classList.remove('active');

  }


  _setEventListeners() {

    const popupErase = document.querySelector('.popup-erase');
    const popupEraseClose = this._elementC.querySelector('.popup-erase__close');
    const popupEraseConfirm = this._elementC.querySelector(".popup-erase__confirm");



    popupEraseClose.addEventListener('click', () => {
      this._closePopupErase();
    });

    popupErase.addEventListener('click', (event) => {
      if (event.target === popupErase) {
        this._closePopupErase();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this._closePopupErase();
      }
    });


   7// elimiar carta de la URL


    popupEraseConfirm.addEventListener('click', () => {


      this._closePopupErase();


      /*
      const name = profileName.textContent;
      const about = profileAbout.textContent;

      const idImage = { name: name, about: about};


      api.eraseCard(idImage);

    });


  }

  _open() {

    console.log ('paso 1');

    popupErase.classList.add('active');

    popupErase.append(this._elementC);

    this._setEventListeners();
  }

}

*/
