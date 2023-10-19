import { profileName, profileAbout, profileAvatar, cards } from "./constants";
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
    return fetch(`${this.baseUrl}/cards/likes`,{
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

  //5. Mostrar cuántos "me gusta" tiene una tarjeta

  //MOSTRAR cuantos me gusta tiene una tarjeta

  getCardLikes() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers
     }) .then(res => {
        if (res.ok) { return res.json();
       } return Promise.reject('Error: ' + res.status);
     }) .catch(err => {
        console.log(err);
       });
  }




// en la Class Card puedo agregar cuando se active el heart:
    // tomar el  valor  la propiedad name de la URL Users  === listo ===
    // agregar dicho valor como valor de  la propiedad Likes de la base Cards == usa push


  addCardLikes(cards)
   {
    return fetch(`${this.baseUrl}/cards`,{
       method: "PATCH",
       headers: this.headers,
       body: JSON.stringify(cards)
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


  /*
  //Agrega el valor del nombre al arreglo "likes[]" del "objeto1"
  objeto1.likes.push(name);
   // Realiza la solicitud PATCH a la API para actualizar el "objeto1" en la base de datos
    fetch('URL_DE_TU_API/objeto1/' + objeto1._id, {
      method: 'PATCH',
      headers: {
         'Content-Type': 'application/json'
        },
        body: JSON.stringify(objeto1)
      })
      .then(response => {
         if (response.ok) { return response.json();
        }
        throw new Error('Error: ' + response.status);
       })
       .then(data => { console.log('Objeto1 actualizado:', data);
       // Haz cualquier otra acción necesaria después de actualizar el objeto1
       // en la base de datos })
       .catch(error => { console.log('Error al actualizar el objeto1:', error);
       // Maneja el error de alguna manera adecuada }); });
*/

  deleteCardLikes(updatedCard) {
    return fetch(`${this.baseUrl}/cards`,{
       method: "DELETE",
       headers: this.headers,
       body: JSON.stringify(updatedCard)
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