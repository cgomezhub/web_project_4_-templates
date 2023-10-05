
import { popupsUserInfo,  profileName, profileAbout } from "./constants";
//import Popup from "./Popup";

export default class UserInfo {
    constructor(selectorUser) {
        this._selectorUser = selectorUser;
    }

    _getTemplateUser() {

        const test = document.querySelector(this._selectorUser)

        const userElement = test.content.querySelector("#profile-form").cloneNode(true);

        
        return userElement;
    }

    _generateUser() {
        this._element = this._getTemplateUser();
        return this._element;
    }

    _handleUserFormSubmit (evt) {
        evt.preventDefault();
        // declarar variables del nuevo element (inputs)
        const inputName = document.querySelector('#text-input-name');
        const inputJob  = document.querySelector("#text-input-about");
        const form = document.querySelector("#profile-form");


        profileName.textContent = inputName.value;
        profileAbout.textContent = inputJob.value;

        popupsUserInfo.classList.remove('active');

        form.reset();     

    }

    _setEventListeners() {
        console.log('entro al setEvent padre');
        
		this._element.querySelector(".form__close").addEventListener("click", this._close);

		
        popupsUserInfo.addEventListener("click", (event) => {
            if (event.target === popupsUserInfo) {
            this._close();
            }
		});

        document.addEventListener('keydown', (event) =>{
            if (event.key === 'Escape') {
              this._close();
            }
        });

        popupsUserInfo.addEventListener("click", (event) => {
            if (event.target === popupsUserInfo) {
            this._close();
            }
		});


        document.addEventListener('submit', this._handleUserFormSubmit);
       
    }



    _open() {
        popupsUserInfo.classList.add('active');
        this._generateUser();

        console.log(this._element);
        // declarar variables del nuevo element (inputs)
        const inputName = this._element.querySelector('#text-input-name');
        const inputJob  = this._element.querySelector("#text-input-about");

        // cargar valores alos inputs
        inputName.value = profileName.textContent;
        inputJob.value = profileAbout.textContent;

        popupsUserInfo.append(this._element);


        this._setEventListeners();

    }
    
    


    _close() {
        popupsUserInfo.classList.remove('active');
    
    }

    
    

	
    

} 

