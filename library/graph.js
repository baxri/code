
export class Node {
    constructor(vertex) {
        this.vertex = vertex;
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


let graph = new Graph();
graph.fillExample();
graph.print();
