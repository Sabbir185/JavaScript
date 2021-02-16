
const word = ['h', 'e', 'l', 'l', 'o'];

console.log('Index of e is : ', word.indexOf('e') );

// by default count 1st item 
console.log('Index of l is : ', word.indexOf('l') );

// start from index 3
console.log('Index of 2nd l is : ', word.indexOf('l',3) );

// doesn't exit , -1
console.log('Index of Y is : ', word.indexOf('Y') );

//.............................................

// Finding all the occurrences of an element

const arr = ['a', 'b', 'c', 'a', 'd', 'a'];

let index = arr.indexOf('a'); // output 0
while( index != -1 ){
    console.log(index);
    index = arr.indexOf('a', ++index );
}

// console.log(arr.indexOf('a',6));  // loop break condition



