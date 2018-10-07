

let array = [1, 2, 3];

class Tree {
    constructor(array) {
        this.root = this.buildFromArray(array);
    }

    buildFromArray(array) {

        let start = 0;
        let end = array.length - 1;

        if (array.length < 1) {
            return null;
        }

        let middle = parseInt((start + end) / 2);

        let left = array.slice(0, middle);
        let right = array.slice(middle + 1);

        let leftLeaf = this.buildFromArray(left);

        let node = new Node(array[middle]);

        if (leftLeaf) {
            node.addChild(leftLeaf);
        }

        // console.log(array[middle]);

        let rightLeaf = this.buildFromArray(right);

        if (rightLeaf) {
            node.addChild(rightLeaf);
        }

        return node;
    }

    toArray() {
        return this.traverse(this.root, []);
    }

    traverse(node, array) {

        if (node.children[0]) {
            this.traverse(node.children[0], array);
        }

        array.push(node.name);

        if (node.children[1]) {
            this.traverse(node.children[1], array);
        }

        return array;

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



let tree = new Tree(array);


console.log(tree.toArray());


