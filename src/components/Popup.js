import { popups, buttonPlace } from './constants';

export default class Popup {
  constructor(selectorPopup) {
    this._selectorPopup = selectorPopup;
  }

  open() {
    popups.classList.add('active');
  }

  // hay que vaciar la seccion popups cada vez  se abra la imagen

  close() {
    popups.classList.remove('active');
  }

  _handleEscClose(event) {
    if (event === 'Escape') {
      popups.classList.remove('active');
    }
  }

  setEventListeners() {
    this._element
      .querySelector('.form__close')
      .addEventListener('click', this.close);

    popups.addEventListener('click', (event) => {
      if (event.target === popups) {
        this.close();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.close();
      }
    });
  }
}
