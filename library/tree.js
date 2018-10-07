
class Tree {
    constructor() {
        this.root = null;
    }
}

class Node {
    constructor(name, children) {
        this.name = name;
        this.children = children;
    }
}

let tree = new Tree();

let node = new Node('gio', []);




console.log(node);
console.log(tree);