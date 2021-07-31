const number = [1, 3, 5, 7];

/*
    array.reduce( function(total, currentValue, currentIndex, arr), initialValue )

    a = 0, c = 1 => a = 1 (addition)
    a = 1, c = 3 => a = 4
    a = 4, c = 5 => a = 9
    a = 9, c = 7 => a = 16 ( final result )

*/

const value = number.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0)

console.log(value)