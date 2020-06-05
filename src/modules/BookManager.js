// import apiKeys from './apiKeys.js'
const remoteURL = "http://localhost:8088"

export default {
  get(id) {
    return fetch(`${remoteURL}/books/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/books`).then(result => result.json())
  },
  post(newBook) {
    return fetch(`${remoteURL}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    }).then((data) => data.json());
  },
  deleteBook(id) {
    return fetch(`${remoteURL}/books/${id}`, {
      method: "DELETE",
    }).then((result) => result.json());
  },
  archiveBook(id) {
    return fetch(`${remoteURL}/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"available": false}),
    }).then((data) => data.json());
  },
  update(editedBook) {
    return fetch(`${remoteURL}/books/${editedBook.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedBook)
    }).then(data => data.json());
  }
}