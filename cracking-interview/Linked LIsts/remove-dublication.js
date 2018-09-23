
const list = {
    head: {
        value: 12,
        next: {
            value: 99,
            next: {
                value: 37,
                next: null
            }
        }
    }
};

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

    get() {
        return this.list;
    }
}


let listObj = new LinkedList(list);

listObj.addTohead(1);
listObj.addTohead(2);
listObj.addTohead(5);
listObj.addTohead(5);
listObj.addTohead(5);
listObj.addTohead(5);


listObj.addTohead(7);
listObj.addTohead(6);
listObj.addTohead(9);



listObj.unique();
console.log(listObj.length);



console.log(listObj.get());

