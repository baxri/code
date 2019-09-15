// Solution Address
// https://app.codility.com/demo/results/trainingBP6W6R-42T/


let A = [];
A[0] = 3
A[1] = 4
A[2] = 3
A[3] = 2
A[4] = 3
A[5] = -1
A[6] = 3
A[7] = 1


function solution(A) {

    let length = A.length / 2;

    let leader = [];
    let values = [];

    for (let i = 0; i < A.length; i++) {

        if (!leader.includes(A[i])) {
            leader.push(A[i]);
        }

        let index = leader.indexOf(A[i]);

        if (typeof values[index] == "undefined") {
            values[index] = 1;
        } else {
            values[index] = values[index] + 1;
        }

        if (values[index] > length) {
            return i;
        }
    }

    return -1;
}


let result = solution(A);
console.log(result);
