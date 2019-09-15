// Solution Address
// https://app.codility.com/demo/results/trainingQXHSU6-AS7/

let A = [-20, -1, 45, 34, 2];

function solution(A) {

    A.sort((a, b) => a - b);

    if (A[0] > 1 || A[A.length - 1] <= 0) {
        return 1;
    }

    for (var i = 0; i < A.length; i++) {

        if (A[i] < 0 && A[i + 1] > 0) {
            A[i] = 0;
        }

        if (A[i] < 0) {
            continue;
        }

        if ((A[i + 1] - A[i]) <= 1) {
            continue;
        } else {
            break;
        }
    }

    return A[i] + 1;
}


console.log(solution(A));
