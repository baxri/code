

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Bst {
    constructor(root) {
        this.root = new Node(root);
    }

    push(value) {

        let currentNode = this.root;
        const node = new Node(value);

        while (currentNode) {
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = node;
                    break;
                } else {
                    currentNode = currentNode.left;
                }

            } else {
                if (!currentNode.right) {
                    currentNode.right = node;
                    break;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    }

    inorder(node = null, func = null) {

        if (node == null) node = this.root;

        if (node.left)
            this.inorder(node.left, func);

        func(node.value);

        if (node.right)
            this.inorder(node.right, func);

    }

    minValue(node = null) {

        if (node == null) node = this.root;

        if (node.left) {
            return this.minValue(node.left);
        }

        return node.value;
    }

    maxValue(node = null) {
        if (node == null) node = this.root;

        if (node.right) {
            return this.maxValue(node.right);
        }

        return node.value;
    }

    height(node = null) {

        if (node == null) node = this.root;

        let leftHeight = 0;
        let rightHeight = 0;

        if (node.left) {
            leftHeight = this.height(node.left);
        }

        if (node.right) {
            rightHeight = this.height(node.right);
        }

        return Math.max(leftHeight, rightHeight) + 1;
    }
}

let bst = new Bst(5);

bst.push(6);
bst.push(7);
bst.push(2);
bst.push(3);


bst.inorder(null, (value) => {
    console.log(value)
});

console.log(bst.minValue());
console.log(bst.maxValue());
console.log(bst.height());