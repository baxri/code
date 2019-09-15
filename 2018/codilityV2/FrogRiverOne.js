// Solution Address
// https://app.codility.com/demo/results/trainingUE9NVM-G84/


let X = 5;
let A = [];
A[0] = 1;
A[1] = 3;
A[2] = 1;
A[3] = 4;
A[4] = 2;
A[5] = 3;
A[6] = 5;
A[7] = 4;

function solution(X, A) {

    let incremented = {};
    let increment = 0;

    for (let i = 0; i < A.length; i++) {

        if (typeof incremented[A[i]] == 'undefined') {
            incremented[A[i]] = true;
            increment++;
        }

        if (increment == X) {
            return i;
        }
    }

    return -1;
}


console.log(solution(X, A));