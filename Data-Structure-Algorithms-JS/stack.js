class EasyStack{

    constructor(){
        this.arr = [];
    }

    add(item){
        this.arr.push(item);
    }

    remove(){
        if(this.arr.length){
            this.arr.pop();
        }
        else{
            console.log('underflow!')
        }
    }

    peek(){
        return this.arr[this.arr.length - 1];
    }

    isEmpty(){
        return this.arr.length == 0;
    }

    printStack(){
        let newArr = [];
        for (let i = 0; i < this.arr.length; i++) {
            newArr += this.arr[i] +' ';
        }
        return newArr;
    }
}

const obj1 = new EasyStack();

obj1.add('sabbir');
obj1.add('Nazib');
obj1.add('Mahbub');
console.log(obj1.arr)

obj1.remove()
console.log(obj1.arr)

console.log(obj1.peek())

console.log(obj1.isEmpty())

console.log(obj1.printStack())
