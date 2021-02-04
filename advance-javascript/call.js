const person = {
    firstName: 'sabbir',
    lastName: 'ahmmed',
    salary: 45000,
    getCost: function(amount, tips, tax){
        // console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

const friend = {
    name: 'nazib',
    salary:29000
}

const cousin = {
    name: 'afsan',
    salary: 33000,
}

// call direct takes object(thisArg) and all parameter
person.getCost.call(friend, 7000, 50, 10);
console.log('Friend\'s salary after cost : ', friend.salary );

person.getCost.call(friend, 300, 10, 3);
console.log('Friend\'s salary after cost : ', friend.salary );



console.log('person\'s salary same as before  : ', person.salary );
