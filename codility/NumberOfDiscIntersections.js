// Solution Address
// https://app.codility.com/demo/results/training564ZUU-9BZ/

let A = [];
A[0] = 1
A[1] = 5
A[2] = 2
A[3] = 1
A[4] = 4
A[5] = 0

function solution(A) {
    let count = 0;
    for (let p = 0; p < A.length; p++) {
        for (let q = p + 1; q < A.length; q++) {

            let distance = q - p;
            let radiuses = A[p] + A[q];

            if (distance <= radiuses) {
                count++;
            }
        }
    }
    return count;
}


let result = solution(A);
console.log(result);

