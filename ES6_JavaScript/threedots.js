const age1  = [22,21,23];
const age2  = [18,17,19,25];
const age3  = [11,12,19,9];
//concat method to add array that is little bit bore !
const newAge = age1.concat(age2).concat(7).concat(age3);
// console.log(newAge);

// new es6 feature add ...(spread operator) methods
// const allAges = [...age1, ...age2, ...age3];
const allAges = [...age1, ...age2, 2,3, ...age3];
console.log(allAges);


// max min method as a arrow
const a = 22;
const b = 10;
const c = 82;
// console.log( Math.max(a,b,c) );
const maxList = [a,b,c];
const maxNum = Math.max(...maxList);
console.log(maxNum);