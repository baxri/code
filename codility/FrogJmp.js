// Solution Address
// https://app.codility.com/demo/results/trainingHVYD2N-P9V/

let X = 80
let Y = 1000
let D = 2

function solution(X, Y, D) {
    let distance = Y - X;
    let jumps = distance / D;
    return Math.ceil(jumps);
}

let result = solution(X, Y, D);

console.log(result);