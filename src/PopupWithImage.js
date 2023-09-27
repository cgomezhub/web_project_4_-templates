import Popup from "./Popup";


export default class PopupWithImage extends Popup{
	constructor(data, popupSelector) {
        super(popupSelector);
        this._text = data.text;
		this._image = data.image;
	}

  
    open() {
        this._element = super.open();
        this._element.querySelector(".images-expand__image").src = this._image;
  	    this._element.querySelector("images-expand__place").textContent = this._text;

  	    return this._element;
    }
}