
// const postInfo = { title: 'foo', body: 'bar', userId: 1,}; // an object

document.getElementById('submit').addEventListener("click",function(){
    const title = document.getElementById('title').value;
    const body = document.getElementById('bodyContent').value;
    const id = document.getElementById('id').value;
    const post = { title: title, body:body, userId:id }; // an object
    postDataToServer( post );
})


function postDataToServer(postInfo) 
{
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postInfo),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    // .then((json) => console.log(json));   // you can display info on document's body
    .then((json) => displayInfo(json) ); 
}



function displayInfo(data){
    document.getElementById('title-id').innerText = data.title;
    document.getElementById('body-id').innerText = data.body;
    document.getElementById('id-id').innerText = data.userId;
}