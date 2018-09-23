

class Stack {
    constructor() {
        this.maxLength = 3;
        this.stack = [];
    }

    push(item) {

        if (this.stack.length == 0) {
            this.stack[0] = [];
        }

        if (this.stack[0].length == this.maxLength) {
            this.stack = [[], ...this.stack];
        }

        this.stack[0] = [item, ...this.stack[0]];

    }

    pop() {
        this.stack[0].shift();

        if (this.stack[0].length == 0) {
            this.stack.shift();
        }
    }

    popAt(subStack) {

        this.stack[subStack].shift();

        for (let st = 0; st < subStack; st++) {

            let lastElement = this.stack[st][this.stack[st].length - 1];
            this.stack[st].pop();

            this.stack[st + 1] = [lastElement, ...this.stack[st + 1]];
        }
    }

    pick() {
        return this.stack[0][0];
    }

    isEmpty() {
        return this.stack.length == 0
    }

    get() {
        return this.stack;
    }
}

let stack = new Stack();

stack.push(4);
stack.push(3);
stack.push(5);
stack.push(1);
stack.push(2);
stack.push(7);
stack.push(8);
stack.push(8);
stack.push(8);

stack.popAt(1)
stack.popAt(2)

console.log(stack.get());





