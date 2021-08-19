// some tricks to find out last element of an array without removing that element 

let arr = [44, 33, 22, 6, 50, 88, 20];

console.log(arr.slice(-1)[0]); // slice return an array  

console.log(arr[arr.length-1]); // arr.length = 7 & we need length 6

console.log(arr.slice().pop()); // last in first out --> stack, pop() also remove that element that's why slice() is used :)

console.log(arr.reverse()[0]); 





