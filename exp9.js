//exp 9 : Bayes Belief
let probRain = 0.2;
let probTrafficGivenRain = 0.8;
let probTrafficGivenNoRain = 0.3;

let probTraffic = (probRain * probTrafficGivenRain) + ((1 - probRain) * probTrafficGivenNoRain);
console.log("P(Traffic):", probTraffic.toFixed(2));