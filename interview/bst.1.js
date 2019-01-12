


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Bst {

    constructor(value) {
        const node = new Node(value);
        this.root = node;
    }

    push(value) {

        const node = new Node(value);

        let currentNode = this.root;

        while (currentNode) {
            if (currentNode.value > node.value) {
                if (currentNode.left == null) {
                    currentNode.left = node;
                    break;
                } else {
                    currentNode = currentNode.left;
                }
            } else {

                if (currentNode.right == null) {
                    currentNode.right = node;
                    break;
                } else {
                    currentNode = currentNode.right;
                }
            }

        }

    }

    traverse(func = null, node = null) {
        if (node === null) node = this.root;

        if (node.left !== null) {
            this.traverse(func, node.left);
        }

        func(node);

        if (node.right !== null) {
            this.traverse(func, node.right);
        }
    }

    minNode(node = null) {

        if (node === null) node = this.root;

        if (node.left === null) {
            return node;
        }

        return this.minNode(node.left);
    }

    maxNode(node = null) {

        if (node === null) node = this.root;

        if (node.right === null) {
            return node;
        }

        return this.maxNode(node.right);
    }

    height(func, node = null) {

        if (node === null) node = this.root;

        let leftHeight = 0;
        let rightHeight = 0;

        if (node.left !== null) {
            leftHeight = this.height(func, node.left)
        }

        if (node.right !== null) {
            rightHeight = this.height(func, node.right)
        }

        return Math.max(leftHeight, rightHeight) + 1;
    }

    delete(value, node = null, parent = null, side = null) {

        if (node === null) node = this.root;

        if (value > node.value) {
            return this.delete(value, node.right, node, 'right');
        }

        if (value < node.value) {
            return this.delete(value, node.left, node, 'left');
        }

        if (node.value == value) {
            if (node.left === null && node.right === null) {
                if (side == 'left') {
                    parent.left = null;
                } else {
                    parent.right = null;
                }
            } else {
                let temp = node.value;
                let deepestRightNode = this.deepestRightNode(node);
                node.value = deepestRightNode.value;

                if (deepestRightNode.value < temp) {
                    this.delete(deepestRightNode.value, node.left, node, 'left');
                } else {
                    this.delete(deepestRightNode.value, node.right, node, 'right');
                }
            }
        }
    }


    deepestRightNode(node = null) {
        if (node.left === null && node.right === null) {
            return node;
        }

        if (node.left !== null) {
            return this.deepestRightNode(node.left);
        } else {
            return this.deepestRightNode(node.right);
        }
    }
}

const bst = new Bst(5);

bst.push(7);
bst.push(6);
bst.push(10);

bst.delete(7);

bst.traverse(node => {
    console.log(node.value);
})

console.log(bst)