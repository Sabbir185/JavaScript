const person = {
    name: 'sabbir',
    age: 23,
    salary: 55000,
    getName: function(){
        console.log(this.name);
    },
    afterCost: function(amount){
        const newAmount = this.salary - amount;
        return newAmount;
    }
}

console.log( person.afterCost(6000));
person.getName();
console.log( person.age );