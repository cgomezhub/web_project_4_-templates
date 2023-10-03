
import { popups } from "./constants";
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
    
    open({ src, alt , text }) {
        super.open();

        this._generatePopup();

        this._element.querySelector(".popup__image").src = src;
        this._element.querySelector(".popup__image").alt = alt;
        this._element.querySelector(".popup__place").textContent = text
        
        popups.prepend(this._element);

        super.setEventListeners();
    }

} 