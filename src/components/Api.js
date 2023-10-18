import { profileName, profileAbout, profileAvatar } from "./constants";
import { cardLink, cardName } from "./constants";
import { profileFormInputName, profileFormInputAbout } from "./constants";
import { popupAddInputPlace, popupAddInputHttps } from "./constants";

import { inputName, inputJob } from "./constants";

export default class Api {
  constructor(options) {
  this.baseUrl = options.baseUrl;
  this.headers = options.headers;
  }


  //1. Cargar la información del usuario desde el servidor

  getUserInfo() {
  return fetch(`${this.baseUrl}/users/me`,{
  headers: this.headers
   })
  .then(res => {
    if (res.ok) {
       return res.json();
    }
    return Promise.reject('Error: ' + res.status);
  })
  .catch(err => {
     console.log(err);
     });
 }

 //2. Cargar las tarjetas desde el servidor

  getInitialCards() {
  return fetch(`${this.baseUrl}/cards`,{
     headers: this.headers
    })
    .then(res => {
       if (res.ok) {
         return res.json();
        }
        return Promise.reject('Error: ' + res.status);
        })
    .catch(err => {
      console.log(err);
    });


  }

 // 3. Editar el perfil

  editPerfil(updatedData) {
      return fetch(`${this.baseUrl}/users/me`,{
         method: "PATCH",
         headers: this.headers,

         body: JSON.stringify(updatedData)
        })
        .then(res => {
          if (res.ok) {
            return res.json();
           }
           return Promise.reject('Error: ' + res.status);
           })
       .catch(err => {
         console.log(err);
        });
  }

  //4. Añadir una nueva tarjeta

  addCard(newImage) {
    return fetch(`${this.baseUrl}/cards`,{
       method: "POST",
       headers: this.headers,
       body: JSON.stringify(newImage)
      })
      .then(res => {
         if (res.ok) {
           return res.json();
          }
          return Promise.reject('Error: ' + res.status);
          })
      .catch(err => {
        console.log(err);
      });
  }

  getCardLikes(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      headers: this.headers
     }) .then(res => {
        if (res.ok) { return res.json();
       } return Promise.reject('Error: ' + res.status);
     }) .catch(err => {
        console.log(err);
       });
     }

}

/*

/5. Mostrar cuántos "me gusta" tiene una tarjeta

api.getCardLikes('cardId') .then(data => {
  const likeCountElement = document.querySelector('.card__like-count');
  likeCountElement.textContent = data.likes.length;
 });


//En este ejemplo, hemos agregado el método getCardLikes a la clase Api.
//Este método recibe el ID de la tarjeta como argumento y realiza una solicitud GET
//a la URL correspondiente para obtener los "me gusta" de esa tarjeta.
//Luego, utilizamos getCardLikes en el código existente para obtener la cantidad
// de "me gusta" de una tarjeta específica. Actualizamos el elemento
//HTML .card__like-count con el valor de data.likes.length,
//que representa la cantidad de "me gusta" que tiene la tarjeta. Recuerda reemplazar 'cardId'
// con el ID real de la tarjeta que deseas obtener los "me gusta".
*/