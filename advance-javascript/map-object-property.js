const students = [
    {id: 185, name: 'Sabbir'},
    {id: 180, name: 'Sium'},
    {id: 181, name: 'Mahbub'},
    {id: 182, name: 'Kalid'}
];

// for (let i = 0; i < students.length; i++) {         // access value, map in list 
//     console.log(students[i].name);
// }

const names = students.map( x => x.name )  // map return a list

const ids = students.filter( n => n.id > 181) //filter return a list, according to condition

const finding = students.find( n => n.id > 182) // find return a value/obj, according to condition


console.log(names);
console.log(ids);
console.log(finding);