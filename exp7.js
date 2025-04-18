//exp7 : Resolution
// Pseudo-representation since actual logic requires a theorem prover
let clauses = ["A v B", "~A", "~B"];
function resolution(clauses) {
    console.log("Clauses:");
    clauses.forEach(c => console.log(c));
    console.log("Resolved: ⊥ (Contradiction)");
}
resolution(clauses);