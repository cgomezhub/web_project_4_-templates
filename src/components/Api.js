export default class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

 //2. Cargar las tarjetas desde el servidor

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject('Error: ' + res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }

//1. Cargar la información del usuario desde el servidor

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject('Error: ' + res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // 3. Editar el perfil

  editPerfil(updatedData) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(updatedData),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject('Error: ' + res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //4. Añadir una nueva tarjeta

  addCard(newImage) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(newImage),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject('Error: ' + res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //7. borrar una tarjeta

  eraseCard(idImage) {
    return fetch(`${this.baseUrl}/cards/` + idImage, {
      method: 'DELETE',
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject('Error: ' + res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //8. anadir y eliminar "me gustas"

  addCardLikes(cardId) {
    return fetch(`${this.baseUrl}/cards/likes/` + cardId, {
      method: 'PUT',
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject('Error: ' + res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteCardLikes(cardId) {
    return fetch(`${this.baseUrl}/cards/likes/` + cardId, {
      method: 'DELETE',
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject('Error: ' + res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // 9. Actualizar la foto de perfil

  editAvatar(updatedAvatar) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(updatedAvatar),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject('Error: ' + res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
