function doSomething(){
    console.log("setTimeOut is a waiting execution process");
}

console.log("1st ");
console.log("2nd execute");
// doSomething();
setTimeout( () => {
    console.log("wait and execute , bla bla bla 10101010101 ")
}, 3000);
// setTimeOut takes two parameters , functions and millisecond ; after execute only once

console.log("3rd execute");
