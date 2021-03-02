// Rest parameter
function doSum(...numbers){
    let sum=0;
    for(let i of numbers ){
        // console.log(i);  output: 1 2 3 4 5
        sum += i ;
    }
    console.log(sum);
}

doSum(1,2,3,4,5);


// Rest parameter and regular parameter
function printNumber(a,b, ...numbers){
    for(let i of numbers){
        console.log(i);
    }
    console.log('a : ',a);
    console.log('b : ',b);
}

printNumber(10,20,1,2,3,4,5); // a=10,b=20, and rest of number -> rest parameter



// using arguments 
function num(){
    arguments
    let sum = 0;
    for(let i of arguments){
        console.log(i);
        sum += i;
    }
    console.log('Sum : ',sum);

}

num(1,2,3,4);