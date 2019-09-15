

let array = [4, 3, 2, 1, 5, 6, 7, 8];

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


    isBalanced(node = this.root, level = 1) {

        let height = this._getHeight(this.root);

        console.log(height);

    }

    _getHeight(node = null) {
        if (!node) return 0;
        return Math.max(this._getHeight(node.left()), this._getHeight(node.right())) + 1;
    }

    _traverse(node, array) {

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

    left() {
        return this.children[0];
    }

    right() {
        return this.children[1];
    }
}



let tree = new Tree(array);


console.log(tree.isBalanced());


