class Department{
    constructor() {
        this.dept = 'CSE';
        this.university = 'NUBTK';
    }
}

class Student extends Department{
    constructor(name,id) {
        super();
        this.name = name;
        this.id = id;
    }

    getDetails(){
        return this.name +' '+this.id+' '+this.dept+' '+this.university;
    }
}

const student1 = new Student("Sabbir",185);
const student2 = new Student("Nazib",195);

console.log( student1.getDetails() );
console.log( student2.getDetails() );