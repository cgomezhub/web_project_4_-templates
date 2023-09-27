import { buttonEdit, popupProfile, profileForm, profileFormClose, profileFormInputName, profileFormInputAbout, profileName, profileAbout, buttonPlace, popupAdd, popupAddClose, popupAddInputPlace, popupAddInputHttps, popupAddForm} from "./constants.js"

import { cards, popupImage, imagesExpandImage, imagesExpandPlace } from "./constants.js";


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



function openAddPopup() {
  popupAdd.classList.add('active');
}

function closeAddPopup() {
  popupAdd.classList.remove('active');
}

buttonPlace.addEventListener('click', openAddPopup);

popupAddClose.addEventListener('click', closeAddPopup);

popupAdd.addEventListener('click', function (event) {
  if (event.target === popupAdd) {
    closeAddPopup();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeAddPopup();
    buttonPlace.removeEventListener('click', openAddPopup);
  }
});

// manejador del evento submit

function handleAddFormSubmit(evt) {
  evt.preventDefault();

   // clonar nodo  para marcado de tarjeta
  const element = document.querySelector('.card').cloneNode(true);


  // declarar las variables para eventos

  const elementImage = element.querySelector('.card__image');
  const elementTrash = element.querySelector('.card__trash');
  const elementHeart = element.querySelector('.card__heart');

  //agregar datos del formulario ingresados por el usuario

  element.querySelector('.card__image').src = popupAddInputHttps.value;
  element.querySelector(
    '.card__image'
  ).alt = `imagen de ${popupAddInputPlace.value}`;
  element.querySelector('.card__place').textContent = popupAddInputPlace.value;

  // configurar  el boton de me gusta

  elementHeart.addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__heart_active');
  });

  // configurar eliminar tarjeta

  elementTrash.addEventListener('click', () => {
    element.style.display = 'none';
  });

  //expandir la imagen

  elementImage.addEventListener('click', () => {
    popupImage.classList.add('active');
    imagesExpandImage.src = popupAddInputHttps.value;
    imagesExpandPlace.textContent = popupAddInputPlace.value;
    imagesExpandImage.alt = `imagen de ${popupAddInputPlace.value}`;
  });

  // agregar la tarjeta nueva al Grid
  cards.prepend(element);
   // cerrar la ventana emergente al enviar el formulario
   popupAdd.classList.remove('active');
}


// agregar el evento submit a la ventana emergente de agregar fotos

popupAddForm.addEventListener('submit', handleAddFormSubmit);
