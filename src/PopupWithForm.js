
import { popups, cards, popupAddInputHttps, popupAddInputPlace, popupAddForm } from "./constants";

import Popup from "./Popup";

export default class PopupWithForm extends Popup{
	constructor( popupSelector) {
        super(popupSelector);
        
       
	}

    _getTemplateFormPopup() {

        const temp = document.querySelector(this._selectorPopup)

        const popupElement = temp.content.querySelector(".form").cloneNode(true);
        
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

        popups.classList.remove('active');

        //form.reset();
    }

    _generateFormPopup() {
        super.open();
        this._element = this._getTemplateFormPopup();
        
        popups.append(this._element);
        this._setEventListeners();
       // return this._element;
    }

    _setEventListeners() {
       
        super.setEventListeners();
            
        // agregar el evento submit a la ventana emergente de agregar fotos
        document.addEventListener('submit', this.handleAddFormSubmit);
        console.log('saliendo del al setEvent');

    }

    
}

/*
    _getInputValues() {
        

        this._generateFormPopup();

        this._element.querySelector(".popup__image").src = src;
        this._element.querySelector(".popup__image").alt = alt;
        this._element.querySelector(".popup__place").textContent = text
        
        popups.prepend(this._element);

        super.setEventListeners();





        this._inputList = this._element.querySelectorAll(".form__input");
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
    
        return this._formValues;
    }

    setEventListeners() {
		this._element.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
      
            this._element.reset();
        })

        this._element.querySelector(".images-expand__close").addEventListener("click", () => {
			this.close();
		});
        
    }

    close() {
        super._close();
        this._handleFormSubmit.reset();
    }
  
    
}



function openProfilePopup() {
  popupProfile.classList.add('active');
  profileFormInputName.value = profileName.textContent;
  profileFormInputAbout.value = profileAbout.textContent;
}

function closeProfilePopup() {
  popupProfile.classList.remove('active');
}

buttonEdit.addEventListener('click', openProfilePopup);

profileFormClose.addEventListener('click', closeProfilePopup);

popupProfile.addEventListener('click', function (event) {
  if (event.target === popupProfile) {
    closeProfilePopup();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeProfilePopup();
    buttonEdit.removeEventListener('click', openProfilePopup);
  }
});


function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileFormInputName.value;
  profileAbout.textContent = profileFormInputAbout.value;
  popupProfile.classList.remove('active');
}

profileForm.addEventListener('submit', handleProfileFormSubmit);

*/