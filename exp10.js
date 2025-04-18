
// exp 10 : Rule based animal Recognition
function recognizeAnimal(features) {
    if (features.includes("feathers") && features.includes("flies")) {
        return "Bird";
    } else if (features.includes("fur") && features.includes("barks")) {
        return "Dog";
    } else if (features.includes("scales") && features.includes("cold-blooded")) {
        return "Reptile";
    }
    return "Unknown";
}

console.log(recognizeAnimal(["fur", "barks"]));