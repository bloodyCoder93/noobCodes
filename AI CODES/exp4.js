// exp 4 :Infromed search 
let graph = {
    A: [{ node: "B", cost: 1 }, { node: "C", cost: 3 }],
    B: [{ node: "D", cost: 3 }],
    C: [{ node: "D", cost: 1 }],
    D: []
};

let heuristic = { A: 4, B: 2, C: 2, D: 0 };

function aStar(start, goal) {
    let open = [{ node: start, f: heuristic[start], g: 0 }];
    let closed = new Set();

    while (open.length > 0) {
        open.sort((a, b) => a.f - b.f);
        let current = open.shift();
        if (current.node === goal) return console.log(`Reached ${goal}`);

        closed.add(current.node);
        for (let neighbor of graph[current.node]) {
            if (!closed.has(neighbor.node)) {
                let g = current.g + neighbor.cost;
                let f = g + heuristic[neighbor.node];
                open.push({ node: neighbor.node, f, g });
            }
        }
    }
}
aStar("A", "D");