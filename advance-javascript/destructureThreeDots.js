// array destructuring
const numbers = [23, 55, 77, 88];

// const x = numbers[0];
// const y = numbers[1];
// console.log(x, y);

// const [x, y] = [23,55];
// console.log(x, y);

const [x, y] = numbers;
// console.log(x,y);

//........................................

// function destructuring
function numAddition(num){
    return [num, num + 5];
}
const [a, b] = numAddition(7);
// console.log(a ,b);

//..........................................

// object destructuring
const person = {id:3, name:'Sabbir', age:'23', gender:'male'};

const {name, gender} = person; // name , gender etc  same as person

console.log('Name : ',name ,'\nGender : ',gender);


//------------------------------------------

// creating new array using three dots , add old array's elements
numbers.push(5); // push add new element in old array
const newArray = [...numbers, 109, 256];
// console.log(newArray);
// const mp = newArray.map( num => num )
// console.log(mp);
newArray.forEach( n => console.log(n) );

