const numbers = [3,4,5,6,7,1,10,22,33];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element ;  // sqrt
//     output.push(result);
// }
// console.log(output);


// function square(element){
//     return element * element;
// }


// const result = numbers.map(function(element){    // function can take 3 parameter ;
//     return element*element;                     // element, index , array etc
// })

const result = numbers.map(element => element * element )     // arrow function
                                                             // map return a list

const filtering = numbers.filter( element => element >= 7 )  // filter according to condition
                                                             // and return a list

                                                                                              const finding = numbers.find( element => element >10 )    // find method return a first number according to condition  
                                                                                        
console.log('map : ',result);
console.log('filter : ',filtering);
console.log('find : ',finding);