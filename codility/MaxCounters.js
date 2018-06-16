// Solution Address
// https://app.codility.com/demo/results/trainingP3S534-K8G/

let N = 5;
let A = [3, 4, 4, 6, 1, 4, 4];

function solution(N, A) {

    let counter = Array(N).fill(0);
    let maxCounter = 0;
    let max = 0;

    for (let i = 0; i < A.length; i++) {
        if (A[i] <= N && A[i] > 0) {
            let index = A[i] - 1;
            counter[index] = Math.max(maxCounter, counter[index]) + 1;
            max = Math.max(counter[index], max);
        } else {
            maxCounter = max;
        }
    }

    return counter.map(e => Math.max(maxCounter, e))
}


let result = solution(N, A);
console.log(result);