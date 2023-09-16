
const cards = document.querySelector('.cards');
const imagesExpand = document.querySelector('.images-expand');
const imagesExpandImage = document.querySelector('.images-expand__image');
const imagesExpandPlace = document.querySelector('.images-expand__place');
const imagesExpandClose = document.querySelector('.images-expand__close');


const elements = [
    {
      image:
        'https://images.unsplash.com/photo-1666831268439-376e34c4de0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
      altImage: 'imagen de la Montana de Yosemite',
      place: 'Montana de Yosemite',
      heart: 'images/heart.svg',
      altHeart: 'corazon de me gusta inactivo',
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
];


export class Card {
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
      .content.querySelector('.card')
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

  _like(evt) {
    evt.target.classList.toggle('card__heart_active');
  }

  _handleRemoveCard() {
    this._element.style.display = 'none';
  }

  _setEventListeners() {
    this._element
      .querySelector('.card__image')
      .addEventListener('click', () => {
        this._handleOpenExpand();
      });

    imagesExpandClose.addEventListener('click', () => {
      this._handleRemoveExpand();
    });

    imagesExpand.addEventListener('click', () => {
      this._handleRemoveExpand();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this._handleRemoveExpand();
      }
    });

    this._element
      .querySelector('.card__heart')
      .addEventListener('click', (evt) => {
        this._like(evt);
      });

    this._element
      .querySelector('.card__trash')
      .addEventListener('click', () => {
        this._handleRemoveCard();
      });
  }
}



elements.forEach((item) => {
  const card = new Card(item, '.card-template');

  const cardElement = card.generateCard();

  cards.append(cardElement);
});

