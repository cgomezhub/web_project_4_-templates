const buttonEdit = document.querySelector('.button-edit');
const popupProfile = document.getElementById('popup-profile');
const profileFormClose = document.querySelector('.form__close');
const profileFormInputName = document.getElementById('text-input-name');
const profileFormInputAbout = document.getElementById('text-input-about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

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

const profileForm = document.getElementById('profile-form');

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileFormInputName.value;
  profileAbout.textContent = profileFormInputAbout.value;
  popupProfile.classList.remove('active');
}

profileForm.addEventListener('submit', handleProfileFormSubmit);

const buttonPlace = document.querySelector('.button-place');
const popupAdd = document.getElementById('popup-add');
const popupAddClose = document.getElementById('add-form-close');
const popupAddInputPlace = document.getElementById('text-input-place');
const popupAddInputHttps = document.getElementById('url-input-image');

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

function like(boton) {
  if (boton.src.includes('./images/heart.svg')) {
    boton.src = './images/Black-heart.png';
    boton.alt = 'corazon de me gusta activo';
  } else {
    boton.src = './images/heart.svg';
    boton.alt = 'corazon de me gusta inactivo';
  }
}

const elements = [
  {
    image:
      'https://images.unsplash.com/photo-1666831268439-376e34c4de0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
    altImage: 'imagen de la Montana de Yosemite',
    place: 'Montana de Yosemite',
    heart: 'images/heart.svg',
    altHeart: 'corazon de me gusta',
    trash: 'images/Trash.svg',
    altTrash: 'cesta  de eliminar',
  },
  {
    image:
      'https://images.unsplash.com/photo-1618595723314-c54d51d6e043?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1220&q=80',
    altImage: 'imagen de Los Arcos',
    place: 'Los Arcos',
    heart: 'images/heart.svg',
    altHeart: 'corazon de me gusta',
    trash: 'images/Trash.svg',
    altTrash: 'cesta  de eliminar',
  },
  {
    image:
      'https://images.unsplash.com/photo-1657589809154-8212431ee6c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    altImage: 'imagen del Canon Bryce',
    place: 'Canon Bryce',
    heart: 'images/heart.svg',
    altheart: 'corazon de me gusta',
    trash: 'images/Trash.svg',
    altTrash: 'cesta  de eliminar',
  },
  {
    image:
      'https://images.unsplash.com/photo-1615405147358-f17791e21fcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    altImage: 'imagen del parque nacional Zion',
    place: 'Parque Nacional Zion',
    heart: 'images/heart.svg',
    altHeart: 'corazon de me gusta',
    trash: 'images/Trash.svg',
    altTrash: 'cesta  de eliminar',
  },
  {
    image:
      'https://images.unsplash.com/photo-1678806922638-27bf485490ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80',
    altImage: 'imagen del parque nacional Denali',
    place: 'Parque Nacional Denali',
    heart: 'images/heart.svg',
    altHeart: 'corazon de me gusta',
    trash: 'images/Trash.svg',
    altTrash: 'cesta  de eliminar',
  },

  {
    image:
      'https://images.unsplash.com/photo-1643252494989-81cd0b5bead2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    altImage: 'imagen del gran canon',
    place: 'Gran Canon',
    heart: 'images/heart.svg',
    altHeart: 'corazon de me gusta',
    trash: 'images/Trash.svg',
    altTrash: 'cesta  de eliminar',
  },
  /*
  {
    image: popupAddInputHttps.value,
    altImage: `imagen de ${popupAddInputPlace.value}`,
    place: popupAddInputPlace.value,
    heart: 'images/heart.svg',
    altHeart: 'corazon de me gusta',
    trash: 'images/Trash.svg',
    altTrash: 'cesta  de eliminar',
    isInput: true
  }*/
];

const cards = document.querySelector('.cards');
const imagesExpand = document.querySelector('.images-expand');
const imagesExpandImage = document.querySelector('.images-expand__image');
const imagesExpandPlace = document.querySelector('.images-expand__place');
const imagesExpandClose = document.querySelector('.images-expand__close');



class Card {
  constructor(data, cardSelector) {
    this._image = data.image;
    this._altImage = data.altImage;
    this._place = data.place;
    this._heart = data.heart;
    this._altHeart = data.altHeart;
    this._trash = data.trash;
    this._altTrash = data.altTrash;
    this._cardSelector = cardSelector;
  }
  
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }


  generateCard() {
    this._element = this._getTemplate();
    
    this._element.querySelector('.card__place').textContent = this._place;
    this._element.querySelector('.card__image').src = this._image;
    this._element.querySelector('.card__image').alt = this._altImage;
    this._element.querySelector('.card__heart').src = this._heart;
    this._element.querySelector('.card__heart').alt = this._altHeart;
    this._element.querySelector('.card__trash').src = this._trash;
    this._element.querySelector('.card__trash').alt = this._altTrash;

    this._setEventListeners();

    return this._element;
  }


  _handleOpenExpand() {
    imagesExpand.classList.add('active');
    imagesExpandImage.src = this._image;
    imagesExpandImage.alt = this._altImage;
    imagesExpandPlace.textContent = this._place;
  }

  _handleRemoveExpand() {
    imagesExpand.classList.remove('active');
  }

  _setEventListeners() {
   
    this._element.querySelector('.card__image').addEventListener('click', () => {
        this._handleOpenExpand();
      });
  
    imagesExpandClose.addEventListener('click', () => _handleRemoveExpand );
  

    imagesExpand.addEventListener('click', function (event) {
      if (event.target === imagesExpand) {
        _handleRemoveExpand();
      }
    });

    document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      _handleRemoveExpand();
    }
    });
  }
}

elements.forEach((item) => {
  const card = new Card(item, '.card-template');

  const cardElement = card.generateCard();

  cards.append(cardElement);
});

/*this._place = data.place;
    this._image = data.image;
    this._altImage = data.altImage;

*/

/*

elements.forEach((element) => {
  const cardTemplate = document.querySelector('#card-template').content;
  
  // clona el contenido de la etiqueta template
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  // añade el contenido de cada tarjeta
  cardElement.querySelector('.card__image').src = element.image;
  cardElement.querySelector('.card__image').alt = element.altImage;

  cardElement.querySelector('.card__trash').src = element.trash;
  cardElement.querySelector('.card__trash').alt = element.altTrash;

  cardElement.querySelector('.card__title').textContent = element.title;

  cardElement.querySelector('.card__heart').src = element.heart;
  cardElement.querySelector('.card__heart').alt = element.altHeart;

  // hacer que aparezca en la página

  cards.append(cardElement);

  // activar botones de cerrar, y de espandir la imagen

  const cardTrash = cardElement.querySelector('.card__trash');
  const cardImage = cardElement.querySelector('.card__image');

  cardTrash.addEventListener('click', () => {
  cardElement.style.display = 'none';
  });

 
  cardImage.addEventListener('click', () => {
    imagesExpand.classList.add('active');
    imagesExpandImage.src = element.image;
    imagesExpandImage.alt = element.altImage;
    imagesExpandPlace.textContent = element.place;
  });

  function removeExpand() {
    imagesExpand.classList.remove('active');
  }

  imagesExpandClose.addEventListener('click', removeExpand);

  imagesExpand.addEventListener('click', function (event) {
    if (event.target === imagesExpand) {
      removeExpand();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      removeExpand();
    }
  });
});

*/

// funcion de me gusta

function like(boton) {
  if (boton.src.includes('images/heart.svg')) {
    boton.src = 'images/Black-heart.png';
    boton.alt = 'corazon de me gusta activo';
  } else {
    boton.src = 'images/heart.svg';
    boton.alt = 'corazon de me gusta inactivo';
  }
}
const cardHeart = document.querySelectorAll('.card__heart');

// alternar boton de me gusta

cardHeart.forEach((boton) => {
  boton.addEventListener('click', () => like(boton));
});

//Declarar la ventada emergente de agregar fotos

const popupAddForm = document.getElementById('add-form');

/*

function handleLugarFormSubmit(evt) {
  evt.preventDefault();
  
  // crear tarjeta nueva
  const element = document.querySelector('.card').cloneNode(true);

  // declarar las variables para eventos

  const elementImage = element.querySelector('.card__image');
  const elementTrash = element.querySelector('.card__trash');
  const elementHeart = element.querySelector('.card__heart');
  
  //agregar datos del formulario ingresados por el usuario

  element.querySelector('.card__image').src = popupAddInputHttps.value;
  element.querySelector('.card__image').alt = `imagen de ${popupAddInputPlace.value}`;
  element.querySelector('.card__place').textContent = popupAddInputPlace.value;

  // cambios en el boton de me gusta

  elementHeart.addEventListener('click', () => like(elementHeart));

  // eliminar la foto

  elementTrash.addEventListener('click', () => {
    element.style.display = 'none';
  });
  
  //expandir la imagen

  elementImage.addEventListener('click', () => {
    imagesExpand.classList.add('active');
    imagesExpandImage.src = popupAddInputHttps.value;
    imagesExpandPlace.textContent = popupAddInputPlace.value;
    imagesExpandImage.alt = `imagen de ${popupAddInputPlace.value}`;
  });

  // cerrar la ventana emergente al enviar el formulario

  popupAdd.classList.remove('active');

  // agregar la tarjeta nueva al Grid

  cards.prepend(element);
}

// agregar el evento a la ventana emergente de agregar fotos

popupAddForm.addEventListener('submit', handleLugarFormSubmit);
*/
