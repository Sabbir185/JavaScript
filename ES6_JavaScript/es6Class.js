class Student
{
    constructor(name,id,age)
    {
        this.name = name;
        this.id = id;
        this.age = age;
        this.University = "NUBTK";
    }
}

let student1 = new Student('Sabbir',185,22);
let student2 = new Student('Motiur',192,21);
let student3 = new Student('Nazib',195,22);

console.log(student1,'\n',student2,'\n',student3);

console.log("Access properties ........ ");

console.log( student1.name );