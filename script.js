"use strict"

//  window.onload = () => {
//      const button = document.getElementById("button");
//      button.onclick= getUserId()
//}
 //Helper function
//   function getUserId(){
//      const baseURL = "https://jsonplaceholder.typicode.com/todos/";
//      const userId = Number(document.getElementById("userIdInput").value);
//      const textContainer = document.getElementById("textContainer");
//  console.log(baseURL + userId)

//      fetch(baseURL + userId)
//      .then(response => response.json())
//      .then(user => {
//          textContainer.innerHTML = `${user.title}`
      //  `
      //     <div class="col">
      //      <div class="card">
      //        <div class="card-header">${user.title}</div>
      //        <div class="card-body">${user.completed}
      //        </div>
      //      </div>
      //      </div>
      // `; 
     //}) 
    // }

    function getUserId(){
      const userInput = document.getElementById("userIdInput").value;
      const displayUser = document.getElementById("textContainer");
  
      fetch('https://jsonplaceholder.typicode.com/todos/' + userInput)
      .then(response => response.json())
      .then(user => {
          displayUser.innerHTML = `${user.title} ${user.userId} ${user.id} ${user.completed}`;
          
      })
  }
    //const baseURL = "https://jsonplaceholder.typicode.com/todos/";
    //const userId = Number(document.getElementById("userIdInput").value);
   // console.log(baseURL);
