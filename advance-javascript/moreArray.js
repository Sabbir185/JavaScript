
/*
    for loop, map, filter, find,
    push, pop, shift, unshift, reverse,
    reduce, includes, length, indexOf
*/

const ID = [185, 181, 186, 192, 195];
const friends = ['mahbub','nazib','kiron','faruk'];

const products = [
    {id:1, name:'mobile', price:700},
    {id:2, name:'laptop', price:1012},
    {id:3, name:'watch', price:300},
    {id:4, name:'tablet', price:1000}
];

// console.log(products);
// console.log(products[0].name);


// using for loop to access properties
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    // console.log(product.name);
    // console.log(product.price);
    
}


// using foreach to access properties
// products.forEach( product => console.log(product.price ) );
products.forEach( product => {
    // console.log(product.price )
} );


// using map to access properties , map take a function & return array
const pName = products.map(pd => pd.name );
// console.log(pName);
// console.log('Product name : ',pName[2]);


// using filter to access properties , filter take a function & return array with object 
const pPrice = products.filter( pd => pd.price < 1000 );
// console.log(pPrice);
const product = products.filter( pd => pd.id != 3 );
// console.log(product);


// using find check is it here or not
const hasLaptop = products.find( pd => pd.name === 'laptop');
console.log(hasLaptop);
