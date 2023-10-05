
import { popupsAdd, cards, addForm, buttonAddForm} from "./constants";

import Popup from "./Popup";

export default class PopupWithForm extends Popup{
	constructor( popupSelector) {
        super(popupSelector);     
	}

    _getInputValues() {

        const inp = document.querySelector(this._selectorPopup)

        const popupElement = inp.content.querySelector("#add-form").cloneNode(true);
        
        return popupElement;
    }

    
    _handleAddFormSubmit (evt) {
        evt.preventDefault();
         
        // clonar nodo  para marco de la tarjeta (element)
        const element = document.querySelector('.card').cloneNode(true);
    
    
        // variables para eventos
        
        const elementImage = element.querySelector('.card__image');
        const elementPlace = element.querySelector('.card__place');
        const elementHeart = element.querySelector('.card__heart');
        const elementTrash = element.querySelector('.card__trash');
        const form = document.querySelector("#add-form");


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

       form.reset();
    }

   
    _generateFormPopup() {
        this._element = this._getInputValues();
        
        return this._element;
    }

    

    _setEventListeners() {
        
        super.setEventListeners();

        popupsAdd.addEventListener("click", (event) => {
            if (event.target === popupsAdd) {
            this.close();
            }
		});


        document.addEventListener('submit', this._handleAddFormSubmit);
        

    }

    _open() {

        super.open();
        popupsAdd.classList.add('active');

        this._generateFormPopup();
        
        popupsAdd.prepend(this._element);

        this._setEventListeners()        

    }
}