// Solution Address
// https://app.codility.com/demo/results/trainingKAUSAR-N7W/

let A = [];
A[0] = -3
// A[1] = 2
// A[2] = -6
// A[3] = 4
// A[4] = 0

function solution(A) {

    let result = null;

    for (let i = 0; i < A.length; i++) {
        for (let j = i; j < A.length; j++) {

            let range = [...A].slice(i, j + 1);
            let sum = range.reduce((a, b) => a + b);

            if (result === null || sum > result) {
                result = sum;
            }
        }
    }

    return result;
}


let result = solution(A);
console.log(result);
