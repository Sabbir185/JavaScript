// FIFO 

class Queue{
    constructor(){
        this.arr = [];
    }

    enqueue(item){
        this.arr.push(item);
    }

    dequeue(){
        if(this.arr.length){
            return this.arr.shift()
        }
        else{
            console.log("underflow!")
        }
    }
}

const lst = new Queue();
lst.enqueue(10)
lst.enqueue(20)
lst.enqueue(30)
lst.enqueue(40)

console.log(lst.arr);

console.log("dequeue : ", lst.dequeue() );

console.log("after dequeue : ", lst.arr);
