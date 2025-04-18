// exp 2 : water jug problem
function waterJugProblem(capX, capY, goal) {
    let visited = new Set();
    let queue = [[0, 0]];

    while (queue.length > 0) {
        let [x, y] = queue.shift();
        if (x === goal || y === goal) {
            console.log(`Goal reached with X: ${x}, Y: ${y}`);
            return;
        }

        let states = [
            [capX, y], [x, capY], [0, y], [x, 0],
            [x - Math.min(x, capY - y), y + Math.min(x, capY - y)],
            [x + Math.min(y, capX - x), y - Math.min(y, capX - x)]
        ];

        for (let [nx, ny] of states) {
            let key = `${nx},${ny}`;
            if (!visited.has(key)) {
                visited.add(key);
                queue.push([nx, ny]);
            }
        }
    }
}
waterJugProblem(4, 3, 2);