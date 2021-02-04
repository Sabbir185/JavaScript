const person = {
    firstName: 'sabbir',
    lastName: 'ahmmed',
    salary: 45000,
    getCost: function(amount){
        // console.log(this);
        this.salary = this.salary - amount;
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


const friendCost = person.getCost.bind(friend);
console.log('Friend\'s cost : ', friendCost(2000) );
console.log('Friend\'s salary : ', friend.salary ); // but salary was 29000 !


// but if I call person's salary .. it's same as before
console.log('Person\'s salary no changed : ', person.salary );


const cousinCost = person.getCost.bind(cousin);
console.log('Cousin\'s cost : ', cousinCost(300) );
