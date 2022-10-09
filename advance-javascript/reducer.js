const number = [1, 2, 3, 4];
const initialValue = 0;

const res = number.reduce((previousValue, currentValue, currentIndex, arr) => {
    console.log(
        "Previous Value : ", previousValue,
        "currentValue Value : ", currentValue,
        "currentIndex Value : ", currentIndex,
        "arr : ", arr
    );

    console.log("previousValue + currentValue : ", currentIndex , " -> ", previousValue + currentValue);

    return previousValue + currentValue;

}, initialValue);

console.log("Result : ", res)

/**
 * Previous Value :  0 currentValue Value :  1 currentIndex Value :  0 arr :  [ 1, 2, 3, 4 ]        
 * previousValue + currentValue :  0  ->  1
 * 
 * Previous Value :  1 currentValue Value :  2 currentIndex Value :  1 arr :  [ 1, 2, 3, 4 ]        
 * previousValue + currentValue :  1  ->  3
 * 
 * Previous Value :  3 currentValue Value :  3 currentIndex Value :  2 arr :  [ 1, 2, 3, 4 ]        
 * previousValue + currentValue :  2  ->  6
 * 
 * Previous Value :  6 currentValue Value :  4 currentIndex Value :  3 arr :  [ 1, 2, 3, 4 ]        
 * previousValue + currentValue :  3  ->  10
 * 
 * Result :  10
 */