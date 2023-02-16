fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(function(users){
        users.forEach(user=>{
            console.log(user.name)
            console.log(user.email)

            const html=
            `<p class= "user-name">${user.name}</p>
             <p class= "user-name">${user.email}</p>`

             document.querySelector(".card-body").innerHTML += html
        });
      })