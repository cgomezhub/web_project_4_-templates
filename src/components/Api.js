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


  //7. borrar una tarjeta

  eraseCard(idImage) {
    return fetch(`${this.baseUrl}/cards/` + idImage,{
       method: "DELETE",
       headers: this.headers,
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

  // en la Class Card puedo agregar cuando se active el heart:
    // tomar el  valor  la propiedad name de la URL Users  === listo ===
    // agregar dicho valor como valor de  la propiedad Likes de la base Cards == usa push

    //8. anadir y eliminar "me gustas"

    addCardLikes(cardId) {
    return fetch(`${this.baseUrl}/cards/likes/`+ cardId,{
       method: "PUT",
       headers: this.headers,
       //body: JSON.stringify(cards)
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

    deleteCardLikes(cardId) {
     return fetch(`${this.baseUrl}/cards/likes/`+ cardId,{
       method: "DELETE",
       headers: this.headers,
       //body: JSON.stringify(updatedCard)
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

