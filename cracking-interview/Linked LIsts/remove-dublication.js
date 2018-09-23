
class LinkedList {
    constructor() {
        this.list = {
            head: {

            }
        };

        this.length = 0;
    }

    addTohead(value) {
        this.list.head = { value: value, next: this.list.head };
        this.length++;
    }

    find(position) {

        let currentNode = this.list.head;
        let index = 0;

        while (currentNode.next) {

            if (index == position) {
                break;
            }

            index++;
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    removeFromHead() {
        if (this.length === 0) {
            return undefined;
        }

        let value = this.list.head.value;
        this.list.head = this.list.head.next;
        this.length--;
        return value;
    }

    remove(value) {

        if (this.list.head.value == value) {
            return this.removeFromHead();
        }

        let prevNode = this.list.head;
        let currentNode = prevNode.next;

        while (currentNode.next) {
            if (currentNode.value == value) {
                break;
            }
            prevNode = currentNode;
            currentNode = currentNode.next;
        }

        prevNode.next = currentNode.next;
        this.length--;
    }

    unique() {

        let currentNode = this.list.head;

        while (currentNode.next) {

            let value = currentNode.value;

            let currentNodeSub = this.list.head;
            let mutches = 0;

            while (currentNodeSub.next) {
                let valueSub = currentNodeSub.value;

                if (value == valueSub) {
                    mutches++;
                }

                if (mutches > 1) {
                    this.remove(valueSub);
                    mutches = 0;
                }

                currentNodeSub = currentNodeSub.next;
            }

            currentNode = currentNode.next;
        }

    }

    toDigit(LinkedList) {

        let currentNode = LinkedList.list.head;

        let str = "";

        while (currentNode.next) {
            str += currentNode.value;
            currentNode = currentNode.next;
        }

        return str * 1;
    }

    plus(list) {

        let number1 = this.toDigit(this);
        let number2 = this.toDigit(list);

        let sum = ((number1 + number2) + "").split("").reverse();
        let LinkedListSum = new LinkedList();

        sum.map(val => {
            LinkedListSum.addTohead(val);
        });

        return LinkedListSum;
    }

    checkPalindrome() {

        for (let i = 0; i < this.length / 2; i++) {

            let left = this.find(i).value;
            let right = this.find((this.length - i - 1)).value;

            if( left != right ){
                return false;
            }
        }

        return true;
    }

    get() {
        return this.list;
    }
}


let list = new LinkedList();

list.addTohead("A");
list.addTohead("B");
list.addTohead("D");
list.addTohead("B");
list.addTohead("A");


console.log(list.checkPalindrome());











