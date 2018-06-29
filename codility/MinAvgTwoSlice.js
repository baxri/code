// Solution Address
// https://app.codility.com/demo/results/trainingRBFJAW-R9Y/

let A = [4, 2, 2, 5, 1, 5, 8];

function solution(A) {
    let min = null;
    let start = 0;
    A.map((elem, key) => {
        for (i = key + 1; i < A.length; i++) {
            let range = A.slice(key, i + 1);
            let sum = range.reduce(function (a, b) { return a + b; });
            let avg = sum / range.length;
            if (min === null) {
                min = avg;
                start = key;
            }
            if (avg < min) {
                min = avg;
                start = key;
            }
        }
    })
    return start;
}


let result = solution(A);
console.log(result);

