const nums = [1, 2, 3, 4, 5];

let sum = 0;
for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    sum = sum + number ;
}
console.log("Using for loop : ",sum);

//...................

const total = nums.reduce((sum, number)=> sum + number , 0);
console.log('Using reduce : ',total);


// explanation
const explanation = nums.reduce((sum, number)=>{
    console.log(sum , number );
    return sum + number ;
}, 0);

console.log("Reduce explanation : ",explanation );


// for object 
const friends = [
    {name:'sabbir', money:25},
    {name:'motiur', money:15},
    {name:'nazib', money:20},
    {name:'kutub', money:30}
];

const totalMoney = friends.reduce( (sum, friend)=> sum + friend.money ,0 );
console.log("Total money : ",totalMoney);