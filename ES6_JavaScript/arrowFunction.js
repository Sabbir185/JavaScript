/* 1...

    function doMath(num){
        return num;
    }
*/

/* 2...

    const doSum = function(num){
        return num;
    }

    or 
    const doSum = function name(num){
        return num ;
    }
*/

// Now arrow function 
// single line automatic return value
const doMath1 = num => num ;

const doMath2 = (num1,num2) => num1+num2 ;

// if multiline occurs
const doMath3 = (num1,num2) => {
    const add = num1 + num2 ;
    const sub = num2 - num1 ;
    const result = add * sub ;
    return result;
}

const result1= doMath1(20);
const result2 = doMath2(20,10);
const result3 = doMath3(10,15);
console.log(result3);
