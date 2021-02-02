function add(num1,num2=10){ // method 3 & best
    // method 1 to handle error
    // if(num2==undefined){
    //     num2 = 0;
    // }

    // method 2 to handle error
    // num2 = num2 || 7 ;


    let result = num1 + num2;
    return result;
}


// if user mistake to set parameter, NaN ( Not a Number )
let addNumber = add(2); 
console.log(addNumber);
