//exp5: 8 Puzzle game representation
let goal = "123456789";

function isSolvable(state) {
    let invCount = 0;
    for (let i = 0; i < 9; i++) {
        for (let j = i + 1; j < 9; j++) {
            if (state[i] !== '0' && state[j] !== '0' && state[i] > state[j]) {
                invCount++;
            }
        }
    }
    return invCount % 2 === 0;
}

let state = "281043765";
console.log("Solvable:", isSolvable(state));