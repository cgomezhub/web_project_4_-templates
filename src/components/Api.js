import { profileName, profileAbout, profileAvatar } from "./constants";
import { cardLink, cardName } from "./constants";
import { profileFormInputName, profileFormInputAbout } from "./constants";
import { popupAddInputPlace, popupAddInputHttps } from "./constants";

class Api {
  constructor(options) {
  this.baseUrl = options.baseUrl;
  this.headers = options.headers;
  }

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

  editPerfil() {
      return fetch(`${this.baseUrl}/users/me`,{
         method: "PATCH",
         headers: this.headers,
         body: JSON.stringify({
          name: "",
          about: ""
        })

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

  addCard() {
    return fetch(`${this.baseUrl}/cards`,{
       method: "POST",
       headers: this.headers,
       body: JSON.stringify({
        name: "",
        link: ""
      })

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

//1. Cargar la información del usuario desde el servidor


const api = new Api({ baseUrl: 'https://around.nomoreparties.co/v1/group-42',
 headers: {
  authorization: 'tu-token',
  "Content-Type": "application/json"
 }
});
api.getUserInfo() .then(data => {
  // Utiliza las propiedades name, about y avatar en los elementos del encabezado correspondientes de la página

   profileName.textContent = data.name;
   profileAbout.textContent = data.about;
   profileAvatar.src = data.avatar;
});

//aseugurate de reemplazar 'tu-token' con el token real que obtuviste para la autenticación.
//También, asegúrate de que las clases o elementos HTML .header__name, .header__about y
// .header__avatar existan en tu página.


//2. Cargar las tarjetas desde el servidor

api.getInicialCards() .then(data => {
  // Utiliza las propiedades name, about y avatar en los elementos del encabezado correspondientes de la página

   cardLink.textContent = data.link;
   cardName.textContent = data.name;
});


//3. Editar el perfil

const editPerfilApi = new Api({ baseUrl: 'https://around.nomoreparties.co/v1/group-42',
 headers: {
   authorization: 'tu-token',
   "Content-Type": "application/json"
  },
 body: JSON.stringify({
  name: "",
  about: ""
 })
 });
editPerfilApi.editPerfil() .then(data => {
  // Utiliza las propiedades name, about y avatar en los elementos del encabezado correspondientes de la página

   data.name = profileFormInputName.value;
   data.about = profileFormInputAbout.value;
});

//4. Añadir una nueva tarjeta

const addCardApi = new Api({ baseUrl: 'https://around.nomoreparties.co/v1/group-42',
 headers: {
   authorization: 'tu-token',
   "Content-Type": "application/json"
  },
 body: JSON.stringify({
  name: "",
  link: ""
 })
 });
addCardApi.editPerfil() .then(data => {
  // Utiliza las propiedades name, about y avatar en los elementos del encabezado correspondientes de la página

   data.name = popupAddInputPlace.value;
   data.link = popupAddInputHttps.value;
});

//5. Mostrar cuántos "me gusta" tiene una tarjeta

// agregar un elemento contador card__like-count a la tarejeta en HTML


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
















