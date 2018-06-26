// Solution Address
// 

let S = "CAGCCTA";

let P = [2, 5, 0];
let Q = [4, 5, 6];

function solution(S, P, Q) {

    for(var i=0; i<S.length; i++) {
        console.log(value(S[i]));
    }

   
    console.log(S);

    return S;
}

function value(gene) {
    if(gene == 'A') {
        return 1;
    } else if(gene == 'C') {
        return 2;
    } else if(gene == 'G') {
        return 3;
    } else {
        return 4;
    }
}


let result = solution(S, P, Q);
console.log(result);

