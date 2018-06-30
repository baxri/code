// Solution Address
// https://app.codility.com/demo/results/training6A7CJX-9G6/


let A = [1, 2];


let result = solution(A);
console.log(result);

function solution(A) {

    let count = 0;

    for (let i = 0; i < A.length; i++) {

        let left = A.slice(0, i + 1);
        let right = A.slice(i + 1);

        let leftLeader = leader(left);
        let rightLeader = leader(right);

        if (leftLeader == rightLeader && leftLeader != -1) {
            count++;
        }
    }

    return count;
}

function leader(A) {

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
            return leader[index];
        }
    }

    return -1;
}


