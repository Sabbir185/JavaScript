
const rotateLeft = (array, d) => {
    const temp = [...array];
    let array2 = [];
    for (let i = 0; i < d; i++) {
        const element = temp[i];
        array2.push(element);
        array.shift();
    }
    const newArray = [...array, ...array2];

    return (temp.length !== 0 && d > 0 ? newArray : 'User input invalid!');
}

// please provide an array and the amount to rotate by; rotateLeft(arr[n], d)
const result = rotateLeft([1, 2, 3, 4, 5], 2);

console.log(result);