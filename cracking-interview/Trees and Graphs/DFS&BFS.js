
let States = {
    unvisited: 0,
    visiting: 1,
    visited: 2,
}

export class Node {
    constructor(vertex) {
        this.vertex = vertex;
        this.state = States.unvisited;
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

function run(graph) {
    BFS(graph.nodes[0]);

    console.log(graph);
}


function BFS(node) {

    let queue = new Queue();

    node.state = States.visited;
    queue.add(node);

    while (!queue.isEmpty()) {

        let dequeue = queue.dequeue();

        if (dequeue.children.length > 0) {

            dequeue.children.map(child => {

                if (child.state == States.unvisited) {
                    child.state = States.visited;
                    queue.add(child);
                }

            });

        }

    }
}

function DFS(node) {

    node.state = States.visited;

    if (node.children.length > 0) {
        node.children.map(child => {

            if (child.state == States.unvisited) {
                DFS(child);
            }

        });
    }

}

console.log(run(graph));

