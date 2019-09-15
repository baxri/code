

let A = [];
A[0] = 1;
A[1] = 2;
A[2] = 3;
A[3] = 4;
A[4] = 5;
A[5] = 6;
A[6] = 7;


function solution(A) {

    A = A.sort();

    if (A[0] != 1) {
        return 0;
    }

    for (let i = 0; i < A.length; i++) {

        let current = A[i];
        let next = A[i + 1];
        let calculatedNext = current + 1;

        if (typeof next != 'undefined' && calculatedNext != next) {
            return 0;
        }

    }

    return 1;
}

console.log(solution(A));