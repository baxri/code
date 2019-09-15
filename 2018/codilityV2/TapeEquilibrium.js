// Solution Address
// https://app.codility.com/demo/results/trainingEAT5R6-XXP/

let A = [];
A[0] = 3;
A[1] = 1;
A[2] = 2;
A[3] = 4;
A[4] = 3;

function solution(A) {

    let leftSums = [];
    let rightSums = [];

    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < A.length - 1; i++) {

        let left = A[i];
        let right = A[A.length - i - 1];

        leftSum = leftSum + left;
        rightSum = rightSum + right;

        leftSums.push(leftSum);
        rightSums.push(rightSum);
    }

    let min;

    for (let i = 0; i < leftSums.length; i++) {

        let left = leftSums[i];
        let right = rightSums[rightSums.length - i - 1];

        let diference = Math.abs(left - right);

        if (typeof min == 'undefined' || min > diference) {
            min = diference;
        }
    }

    return min;
}


console.log(solution(A));