// Solution Address
// https://app.codility.com/demo/results/trainingYNP495-ZYY/

let X = 80
let Y = 1000
let D = 2

function solution(X, Y, D) {
    return Math.ceil((Y - X) / D);
}

let result = solution(X, Y, D);

console.log(result);