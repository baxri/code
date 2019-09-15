

let array = [1, 2, 3, 4, 5, 6, 7];

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

console.log(tree);


