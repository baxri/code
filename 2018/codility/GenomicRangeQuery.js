// Solution Address
// https://app.codility.com/demo/results/trainingA6WRUD-XUT/

let S = "CAGCCTA";

let P = [2, 5, 0];
let Q = [4, 5, 6];

function solution(S, P, Q) {

    S = S.split("");
    for (var i = 0; i < S.length; i++) {
        S[i] = value(S[i]);
    }

    let result = [];

    for (var i = 0; i < P.length; i++) {
        let start = P[i];
        let end = Q[i];
        let range = S.slice(start, end + 1);
        result.push(Math.min(...range));
    }

    return result;
}

function value(gene) {
    if (gene == 'A') {
        return 1;
    } else if (gene == 'C') {
        return 2;
    } else if (gene == 'G') {
        return 3;
    } else {
        return 4;
    }
}


let result = solution(S, P, Q);
console.log(result);

