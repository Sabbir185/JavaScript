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

// apply direct takes object(thisArg) and all parameter as an array
person.getCost.apply(cousin, [3000, 200, 50]);
console.log('cousin\'s salary after cost : ', cousin.salary );

person.getCost.apply(friend, [300, 200, 100]);
console.log('Friend\'s salary after cost : ', friend.salary );



console.log('person\'s salary same as before  : ', person.salary );
