// Solution Address
// https://app.codility.com/demo/results/training3UEX95-25D/

let N = 30;

function solution(N) {

    let i = 1;
    let result = null;

    if (N == 0) result = 0;

    while (i * i <= N) {
        if (N % i == 0) {
            let perimeter = 2 * (i + (N / i));
            if (result === null || perimeter < result) {
                result = perimeter;
            }
        }
        i++;
    }
    return result;
}


let result = solution(N);
console.log(result);
