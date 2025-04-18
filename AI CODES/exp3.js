// exp 3 : BFS & DFS
const graph = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [], E: [], F: []
};

function bfs(start) {
    let visited = new Set();
    let queue = [start];

    while (queue.length > 0) {
        let node = queue.shift();
        if (!visited.has(node)) {
            console.log(node);
            visited.add(node);
            queue.push(...graph[node]);
        }
    }
}

function dfs(node, visited = new Set()) {
    if (visited.has(node)) return;
    console.log(node);
    visited.add(node);
    for (let neighbor of graph[node]) dfs(neighbor, visited);
}

console.log("BFS:");
bfs("A");

console.log("DFS:");
dfs("A");