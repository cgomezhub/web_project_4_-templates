

export default class Popup {
	constructor(popupSelector) {
    this._popupSelector = popupSelector;
	}

  
    open() {
        popupSelector.classList.add('active');
    }
      
    close() {
        popupSelector.classList.remove('active');
    }

    _handleEscClose(event) {
        if (event.target === "escape") {
          close();
        }
    }


	setEventListeners() {
		this._element.querySelector(".form__close").addEventListener("click", () => {
			this.close();
		});

        this._element.querySelector(".popup").addEventListener("click", () => {
			this.close();
		});
        document.addEventListener('keydown', (event) =>{
            this._handleEscClose(event);            
          });
    }

}
