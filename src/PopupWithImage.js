
import { popupsImage, } from "./constants";
import Popup from "./Popup";

export default class PopupWithImage extends Popup {
    constructor(selectorPopup) {
        super(selectorPopup);
    }

    _getTemplatePopup() {

        const test = document.querySelector(this._selectorPopup)

        const popupElement = test.content.querySelector(".popup__container").cloneNode(true);
        
        return popupElement;
    }

    _generatePopup() {
        this._element = this._getTemplatePopup();
        return this._element;
    }

    _setEventListeners(){
        super.setEventListeners();
        popupsImage.addEventListener("click", (event) => {
            if (event.target === popupsImage) {
                popupsImage.classList.remove('active');
            }
		});
    }
    
    open({ src, alt , text }) {
        super.open();
        popupsImage.classList.add('active');

        this._element.querySelector(".popup__image").src = src;
        this._element.querySelector(".popup__image").alt = alt;
        this._element.querySelector(".popup__place").textContent = text
        
        popupsImage.append(this._element);

        this._setEventListeners();
    }

} 