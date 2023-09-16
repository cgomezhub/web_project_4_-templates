const cards = document.querySelector('.cards');


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

import { Card } from "../scripts/Card.js";


elements.forEach((item) => {
  const card = new Card(item, '.card-template');

  const cardElement = card.generateCard();

  cards.append(cardElement);
});



import { FormValidator } from "../scripts/FormValidator.js";



