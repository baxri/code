// Solution Address
// https://app.codility.com/demo/results/trainingY5ASQC-X3F/

let A = [1, 1, 1, 2, 2];

function solution(A) {
    return [...new Set(A)].length;
}


let result = solution(A);
console.log(result);

