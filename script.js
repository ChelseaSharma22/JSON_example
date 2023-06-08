"use strict"

    function getUserId(){
      const userInput = document.getElementById("userIdInput").value;
      const displayUser = document.getElementById("textContainer");
  
      fetch('https://jsonplaceholder.typicode.com/todos/' + userInput)
      .then(response => response.json())
      .then(user => {
          displayUser.innerHTML = `${user.title} ${user.userId} ${user.id} ${user.completed}`;
          
      })
  }

  

