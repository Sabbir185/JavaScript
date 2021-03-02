function something(name){
    return name;
}

console.log("Normal : ", something('Sabbir Ahmmed') );


// dynamic function
const dynamic = function(name){
    return name;
}

console.log("dynamic function : ", dynamic('Shahnaz Akter') );



// arrow function
const arrowFunction = (name) => name ;
console.log("Arrow Function : ", arrowFunction("Momotaz Khatun") );