const money = 800;
let food ;

if(money>100){
    food = 'biryani';
}else{
    food = 'white-rich';
}


// alternative of if-else
// variable = condition ? true statement : false statement ;

const meal = money > 100 ? 'Biryani' : 'Dal-vath' ; 



// only true or if statement
let days = true ;
const isMonDay = days && 'yes' ;
console.log(isMonDay);


// only false or else statement
let year = false;
const leapYear = year || 'No' ;
console.log(leapYear);

