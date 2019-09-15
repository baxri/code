// Solution Address
// https://app.codility.com/demo/results/trainingSBUKUS-H3K/

let A = [5, 4, 6, 7, 8, 9]

function solution(A) {

    A.sort(function (a, b) {
        return a - b;
    });

    let next = 1;
    let i = 0;
    while (next === A[i]) {
        next++;
        i++;
    }

    return next;``
}

let result = solution(A);

console.log(result);
