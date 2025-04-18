//exp8 :Planning programming
let tyres = {
    car: ["A", "B"],
    spare: "C",
    flat: ["A"]
};

function replaceFlat() {
    if (tyres.flat.includes("A")) {
        console.log("Replacing A with spare C");
        tyres.car[tyres.car.indexOf("A")] = "C";
        tyres.spare = "A";
    }
    console.log("Current Tyres:", tyres);
}
replaceFlat();