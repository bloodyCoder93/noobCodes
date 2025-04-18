//exp 6 : Family tree
let family = {
    name: "JHON",
    parent: {
        name: "ALICE",
        parent: {
            name: "KANE"
        }
    }
};

function printFamily(tree, generation = 1) {
    if (!tree) return;
    console.log("Gen " + generation + ": " + tree.name);
    printFamily(tree.parent, generation + 1);
}
printFamily(family);