fetch('https://jsonplaceholder.typicode.com/users')
.then( response => response.json() )
.then( json => displayUser(json) )
.catch( error => console.log(error) )  // if not response json 


function displayUser(users){
    const userName = users.map( user => user.username );
    const ul = document.getElementById('json-data');

    for (let i = 0; i < userName.length; i++) {
        const username = userName[i];
        const li = document.createElement('li');
        li.innerText = username;
        ul.appendChild(li);
    }
}