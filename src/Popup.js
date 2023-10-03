
import { popups } from "./constants";
export default class Popup {
	constructor(selectorPopup) {
    this._selectorPopup = selectorPopup;
	}

    open() {
        console.log('abre open padre');
         popups.classList.add('active');
    }

      // hay que vaciar la seccion popups cada vez  se abra la imagen
    
    close() {
        popups.classList.remove('active');
    
    }

    _handleEscClose(event) {
        if (event.target === "escape") {
        popups.classList.remove('active')
        }
    }

	setEventListeners() {

        /*this._element
        .querySelector('.card__image').addEventListener('click', () => {
          this.open();
        });*/
		this._element.querySelector(".form__close").addEventListener("click", (evt) => {
			this.close();

		});
		

       /* const test = this._element.querySelector(".popups")
        console.log("🚀 ~ Popup ~ setEventListeners ~ this._element:", this._element)

        if(test){
            test.addEventListener("click", () => {
                this.close();
            });

        }*/

        
        popups.addEventListener("click", () => {
			this.close();
		});

        
        document.addEventListener('keydown', (event) =>{
            this._handleEscClose(event);            
          });
    }
}

