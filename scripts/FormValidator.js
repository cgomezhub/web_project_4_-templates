import { formSelector, inputSelector } from "../utils/constants.js";

export class FormValidator {
  constructor(formSelector) {
    this._formSelector = formSelector;
    this._inputSelector = inputSelector;
    
  }

  _showError (formSelector, inputSelector, errorMessage) {
    const errorClass = formSelector.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.add('form__input_type_error');
    errorClass.textContent = errorMessage;
    errorClass.classList.add('form__error_active');
  };
  
  _hideError (formSelector, inputSelector) {
    const errorClass = formSelector.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.remove('form__input_type_error');
    errorClass.classList.remove('form__error_active');
    errorClass.textContent = '';
  };

  _checkInputValidity (formSelector, inputSelector) {
    if (!inputSelector.validity.valid) {
      // Si NO lo es (!), muestra el elemento erróneo
      this._showError(formSelector, inputSelector, inputSelector.validationMessage);
      
    } else {
      // Si es válido, oculta el elemento erróneo
      this._hideError(formSelector, inputSelector);
    }
  };
  
  _hasInvalidInput (inputList) {
    // itera sobre el array utilizando el método some()
    return inputList.some((inputSelector) => {
      // Si el campo no es válido, el callback devolverá true.
      // El método se detendrá entonces, y la función hasInvalidInput() devolverá true
      // hasInvalidInput devuelve true
  
      return !inputSelector.validity.valid;
    });
  };
    
  _toggleButtonState (inputList, submitButtonSelector) {
    // Si hay al menos una entrada que no es válida
    if (this._hasInvalidInput(inputList)) {
      // hace que el botón esté inactivo
      submitButtonSelector.classList.add('form__button_inactive');
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
        }
      }); 
    } else {
      // en caso contrario, lo hace activo
      submitButtonSelector.classList.remove('form__button_inactive');
      
      }
  };

  _setEventListeners (formSelector)  {
    // Encuentra todos los campos dentro del formulario y
    // crea un array a partir de estos, utilizando el método Array.from()
    const inputList = Array.from(formSelector.querySelectorAll('.form__input'));
    const submitButtonSelector = formSelector.querySelector('.form__button');
    // Llama a toggleButtonState() antes de empezar a detectar el evento de entrada
    this._toggleButtonState(inputList, submitButtonSelector);
    // Itera sobre el array obtenido
    inputList.forEach((inputSelector) => {
      // agrega el controlador de eventos de entrada a cada campo
      inputSelector.addEventListener('input', () => {
        // Llama a la función chechInputValidity() dentro del callback
        // y pásale el formulario y el elemento a comprobar
        this._checkInputValidity(formSelector, inputSelector);
        // Llama a toggleButtonState() y pásale un array de campos y el botón
        this._toggleButtonState(inputList, submitButtonSelector);
      });
    });
  };

  enableValidation  () {
    // Encontrará todos los formularios con la clase especificada en el DOM y
    // creará un array, a partir de estos, utilizando el método Array.from()
    const formList = Array.from(document.querySelectorAll('.form'));
    // Itera sobre el array obtenido
    formList.forEach((formSelector) => {
      formSelector.addEventListener('submit', (evt) => {
        // Cancela el comportamiento por defecto de cada formulario
        evt.preventDefault();
      });
    
      // Llama a la función setEventListeners() para cada formulario
      // tomando un elemento del formulario como argumento
      this._setEventListeners(formSelector);
      
    });
  };
}

const validator = new FormValidator(formSelector);

validator.enableValidation();