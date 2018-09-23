

class Stack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(item) {

        if (this.minStack.length == 0 || item <= this.minStack[0]) {
            this.minStack = [item, ...this.minStack];
        }

        this.stack = [item, ...this.stack];
    }

    pop() {

        if (this.minStack[0] == this.stack[0]) {
            this.minStack.shift();
        }

        this.stack.shift();
    }

    pick() {
        return this.stack[0];
    }

    isEmpty() {
        return this.stack.length == 0
    }

    min() {
        return this.minStack[0];
    }

    sort() {
        for (let i = 0; i < this.stack.length; i++) {
            for (let j = i + 1; j < this.stack.length; j++) {
                if (this.stack[j] < this.stack[i]) {
                    this.swap(i, j);
                }
            }
        }
    }

    swap(i, j) {
        let temp = this.stack[i];
        this.stack[i] = this.stack[j];
        this.stack[j] = temp;
    }

    get() {
        return this.stack;
    }
}

let stack = new Stack();

stack.push(4);
stack.push(3);
stack.push(5);
stack.push(7);
stack.push(9);

stack.sort();


console.log(stack.get());


console.log(stack);


