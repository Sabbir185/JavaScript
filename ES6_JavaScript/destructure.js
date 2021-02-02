const person = {name:'sabbir', id:'185', dept:'CSE', university:'NUBTK'};

// const personName = person.name;
// console.log(personName);

const { name , id } = person;
console.log( name , id );



const person2 = {
    name2: 'Nazib',
    info: {
        id: 185,
        dept:'CSE',
        weight:105
    }, 
    age: 23
}
const { weight } = person2.info;
console.log( weight );


const friendList = ['motiur','nazib','mahbub','likhon'];
const [firstName, secondName, ...restName] = friendList ;
console.log( firstName, secondName );
console.log( restName );
