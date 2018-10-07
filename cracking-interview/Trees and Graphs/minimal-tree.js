

let array = [1, 2, 3, 4];

class Tree {
    constructor() {
        this.root = null;
    }
}

class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }
}

function minimalTree(array, tree) {

    let start = 0;
    let end = array.length - 1;

    if (array.length < 1) {
        return null;
    }

    let middle = parseInt((start + end) / 2);

    let left = array.slice(0, middle);
    let right = array.slice(middle + 1);

    // console.log(middle);
    // console.log(left, );
    // console.log(right);

    // if (array.length > 1) {
    let leftLeaf = minimalTree(left, tree);
    // }

    let node = new Node(array[middle]);

    if (leftLeaf) {
        node.addChild(leftLeaf);
    }

    console.log(array[middle]);

    let rightLeaf = minimalTree(right, tree);

    if (rightLeaf) {
        node.addChild(rightLeaf);
    }

    return node;
}

let tree = new Tree();

console.log(minimalTree(array, tree));


