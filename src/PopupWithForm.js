
import { popupsAdd, cards} from "./constants";

import Popup from "./Popup";

export default class PopupWithForm extends Popup{
	constructor( popupSelector) {
        super(popupSelector);     
	}

    _getInputValues() {

        const inp = document.querySelector(this._selectorPopup)

        const popupElement = inp.content.querySelector(".form").cloneNode(true);
        
        return popupElement;
    }

    
    handleAddFormSubmit (evt) {
        evt.preventDefault();

        console.log('entro al handle');
    
        // clonar nodo  paramarco de la tarjeta (element)
        const element = document.querySelector('.card').cloneNode(true);
    
    
        // variables para eventos
        
        const elementImage = element.querySelector('.card__image');
        const elementPlace = element.querySelector('.card__place');
        const elementHeart = element.querySelector('.card__heart');
        const elementTrash = element.querySelector('.card__trash');

        const textInputPlace = document.getElementById('text-input-place');
        const urlInputIimage = document.getElementById('url-input-image');

        //agregar datos del formulario ingresados por el usuario
    
        elementImage.src = urlInputIimage.value;   
        elementImage.alt = `imagen de ${urlInputIimage.value}`;
        elementPlace.textContent = textInputPlace.value;
    
        // configurar  el boton de me gusta
    
        elementHeart.addEventListener('click', (evt) => {
        evt.target.classList.toggle('card__heart_active');
        });
    
        // configurar eliminar tarjeta
    
        elementTrash.addEventListener('click', () => {
        element.style.display = 'none';
        });
    
        // agregar la tarjeta nueva al Grid

        cards.prepend(element);

        // cerrar la ventana emergente al enviar el formulario

        popupsAdd.classList.remove('active');

        //form.reset();
    }

   
    _generateFormPopup() {
        this._element = this._getInputValues();
        
        //popupsAdd.append(this._element);
       // this._setEventListeners();
        return this._element;
    }

    

    _setEventListeners() {
        console.log('entro al setEvent');
        super.setEventListeners();

        console.log('salio del setEvent padre');
        
        document.addEventListener('submit', this.handleAddFormSubmit);
        console.log('saliendo submit');

    }

    _open() {

        super.open();
        popupsAdd.classList.add('active');

        console.log('paso open');

        this._generateFormPopup();
        
        console.log('obtuvo el clon');

        // generar otro pop up para cambiar el form
        popupsAdd.append(this._element);

        console.log('agrego a html');

        this._setEventListeners()

        console.log('salio de setE');

    }
}