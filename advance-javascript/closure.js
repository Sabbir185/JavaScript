function countNumber(){
    let count = 0;
    return function(){
        count++ ;
        return count;
    }
}

const counter1 = countNumber();
// console.log(counter1); // showing function (anonymous)
console.log( counter1() ) // calling  & working , return a closed function
console.log( counter1() ) 
console.log( counter1() ) 

console.log('....................')

const counter2 = countNumber();
console.log( counter2() ) 
console.log( counter2() ) 

console.log('....................')


console.log( counter1() ) 
console.log( counter2() ) 


// call a function inside a function or return a function from another


