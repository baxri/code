
export class Queue {

    constructor() {
        this.list = [];
    }

    add(node) {
        this.list.push(node);
    }

    dequeue() {
        this.list = this.list.slice(1);
    }

    isEmpty() {
        return this.list.length == 0
    }

}

let queue = new Queue();

queue.add(1);
queue.add(2);
queue.add(3);
queue.add(4);
queue.add(5);

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();


console.log(queue.isEmpty());