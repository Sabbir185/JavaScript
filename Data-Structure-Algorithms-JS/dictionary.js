// get value by key, no need array index

class Dictionary{
    constructor(){
        this.dictionary = {}
    }

    add(key, value){
        this.dictionary[key] = value;
    }

    get(key){
        return this.dictionary[key];
    }
}

const a = new Dictionary();
a.add('sabbir', 185);
a.add('motiur', 185);
a.add('nazib', 195);

console.log( a.dictionary );

console.log( a.get('nazib') )