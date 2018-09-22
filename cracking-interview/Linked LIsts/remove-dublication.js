
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

    remove(value) {

        let list = {
            head: {

            },
        };
        let prevNode = null;
        let currentNode = this.list.head;

        while (currentNode.next) {
            if (currentNode.value == value) {
                if (prevNode) {
                    prevNode.next = currentNode.next;
                    list.head = prevNode;
                } else {
                    list.head = currentNode.next;
                }
            }
            prevNode = currentNode;
            currentNode = currentNode.next;
        }

        this.list = list;
    }

    get() {
        return this.list;
    }
}


let listObj = new LinkedList(list);

listObj.addTohead(1);
listObj.addTohead(2);
listObj.addTohead(3);
listObj.addTohead(4);
listObj.addTohead(5);

console.log(listObj.get());


listObj.remove(4);
listObj.remove(5);
listObj.remove(3);

console.log(listObj.get());

