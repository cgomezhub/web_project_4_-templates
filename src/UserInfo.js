

export default class UserInfo {
	constructor(nameSelector, jobSelector) {
        this._nameSelector = nameSelector;
        this._jobSelector = jobSelector;
	}

    getUserInfo() {
        popupProfile.classList.add('active');
        profileFormInputName.value = this._nameSelector.textContent;
        profileFormInputAbout.value =this._jobSelector.textContent;
    }
    
    setIUserInfo(evt) {
        evt.preventDefault();
        this._nameSelector.textContent = profileFormInputName.value;
        this._jobSelector.textContent = profileFormInputAbout.value;
        popupProfile.classList.remove('active');
    }

}

