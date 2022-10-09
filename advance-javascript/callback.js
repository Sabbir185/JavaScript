/**
 * simple callback function concept
 */

const display = (value) => {
    console.log(value)
}

const calculation = (num1, num2, callback) => {
    const sum = num1 + num2;

    if (callback) {
        callback(sum)
    }

    return sum;
}

// passing a callback function
// calculation(2,3, display)

// or
calculation(2, 3, function (v) {
    console.log(v)
})