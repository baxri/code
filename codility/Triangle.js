// Solution Address
// https://app.codility.com/demo/results/trainingPUV8RP-N25/

let A = [];
A[0] = 1
A[1] = 5
A[2] = 2
A[3] = 1
A[4] = 4
A[5] = 0

function solution(A) {

    if (A.length < 3) {
        return 0;
    }

    for (let p = 0; p < A.length; p++) {
        for (let q = p + 1; q < A.length; q++) {
            for (let r = q + 1; r < A.length; r++) {

                if (A[p] + A[q] > A[r]) {
                    if (A[q] + A[r] > A[p]) {
                        if (A[r] + A[p] > A[q]) {
                            return 1;
                        }
                    }
                }

            }
        }
    }

    return 0;
}


let result = solution(A);
console.log(result);

