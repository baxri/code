

let A = [-100, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 100 ];

console.log(solution(A));

function solution(A) {

    let min = 1;
    A = A.sort();

    for (let i = 0; i < A.length; i++) {

        let current = A[i];

        if (current < 0) {
            continue;
        }

        if (current < min) {
            continue;
        }

        if (current == min) {
            min++;
        }
    }

    return min;
}

