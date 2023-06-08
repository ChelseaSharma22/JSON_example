"use strict"

window.onload= () => {
    const people= document.getElementById("peopleContent")
    const baseURL= "https://jsonplaceholder.typicode.com/users"

    fetch(baseURL)
    .then(response => response.json())
    .then(users =>{
        for (let i = 0; i < users.length; i++) {
            people.innerHTML+=
      `<tr>
        <td>${users[i].username}</td>
        <td>${users[i].name}</td>
        <td>${users[i].phone}</td>
        <td>${users[i].email}</td>
        <td>${users[i].address.city}</td>
        <td>${users[i].website}</td>
      </tr>
  ` 
        }
    })
}