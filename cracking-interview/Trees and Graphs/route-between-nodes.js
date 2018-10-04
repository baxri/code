
export class Node {
    constructor(vertex) {
        this.vertex = vertex;
        this.visited = false;
    }

    connectTo(children) {
        this.children = children;
    }
}

export class Graph {
    constructor() {
        this.nodes = []
    }

    fill(nodes) {
        nodes.map(node => this.nodes.push(node));
    }

    fillExample() {

        let A = new Node('A');
        let B = new Node('B');
        let C = new Node('C');
        let D = new Node('D');
        let E = new Node('E');

        A.connectTo([B, D, C]);
        B.connectTo([]);
        C.connectTo([E]);
        D.connectTo([E, B]);
        E.connectTo([B]);

        this.fill([A, B, C, D, E]);
    }

    print() {
        this.nodes.map(node => {
            console.log(node.vertex, '->', '[', ...(node.children.map(n => n.vertex)), ']');
        });
    }
}

class Queue {

    constructor() {
        this.list = [];
    }

    add(node) {
        this.list.push(node);
    }

    dequeue() {
        let node = this.list[0];;
        this.list = this.list.slice(1);
        return node;
    }

    isEmpty() {
        return this.list.length == 0
    }

}

let graph = new Graph();
graph.fillExample();
graph.print();


function search(graph, start, end) {

    let queue = new Queue();

    queue.add(start);

    while (!queue.isEmpty()) {

        let dequeued = queue.dequeue();

        if (dequeued.vertex == end.vertex) {
            return true;
        }

        dequeued.children.map(child => {
            queue.add(child);
        });

    }

    return false;
}

console.log(search(graph, graph.nodes[0], graph.nodes[1]));

