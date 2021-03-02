"use strict"

function doSum(){
          x = 3 ;   // strict mode catch every error !
    const y = 17 ;
    const result = x + y;
    return result;
}

const res = doSum();
console.log(res);