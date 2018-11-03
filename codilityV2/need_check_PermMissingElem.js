// Solution Address
// 

// let A = [2, 3, 1, 5];
let A = [];

function solution(A) {

    A = A.sort();

    if (A[0] != 1) {
        return 1;
    }

    for (let i = 0; i < A.length; i++) {

        let current = A[i];
        let next = A[i + 1];

        if (current + 1 != next) {
            return current + 1;
        }
    }
}

console.log(solution(A));