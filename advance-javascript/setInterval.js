function doSomething(){
    console.log("setTimeOut is a waiting execution process");
}

console.log("1st ");
console.log("2nd execute");
setInterval(function(){
    console.log("multiple test, which one execute first !")
}, 2000);
// doSomething();
setInterval( () => {
    console.log("wait and execute , bla bla bla 10101010101 , to stop ctrl+c ")
}, 3000);
// setInterval takes two parameters , functions and millisecond ; after execute according to time break

console.log("3rd execute");


// NB. it is not grantee that exact 2 or 3 second after execute setTimeOut and setInterval
// but it is grantee that program never execute before 2 or 3 seconds 
// setInterval, setTimeOut work asynchonous way