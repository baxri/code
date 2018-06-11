// Solution Address
// https://app.codility.com/demo/results/trainingR672FS-GG9/

let N = 1041;

function solution(N) {

    let binary = N.toString(2);

    let ar = binary.split(1);

    if (ar.length < 3) {
        return 0;
    }

    ar.splice(0, 1);
    ar.splice(ar.length - 1, 1);

    let longestGap = 0;

    ar.map(gap => {
        longestGap = (longestGap < gap.length ? gap.length : longestGap);
    });

    return longestGap;
}


let result = solution(N);
console.log(result);

