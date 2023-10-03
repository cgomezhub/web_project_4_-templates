import Popup from "./Popup";

export default class PopupWithForm extends Popup{
	constructor(, popupSelector) {
        super(popupSelector);
        
       
	}

    _getTemplateFormPopup() {

        const temp = document.querySelector(this._selectorPopup)

        const popupElement = temp.content.querySelector(".popup-form-template").cloneNode(true);
        
        return popupElement;
    }

    _generateFormPopup() {
        this._element = this._getTemplateFormPopup();
        return this._element;
    }


    _getInputValues() {
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

/*


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