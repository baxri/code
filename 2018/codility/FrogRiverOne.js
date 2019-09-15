// Solution Address
// https://app.codility.com/demo/results/trainingVYFJ5X-NP6/

let X = 5;
// let A = [];
// A[0] = 1
// A[1] = 2
// A[2] = 1
// A[3] = 3
// A[4] = 2
// A[5] = 4
// A[6] = 5
// A[7] = 4

let A = [];

for (let i = 1; i <= 100000; i++) {
    A.push(i);
}

function solution(X, A) {
    let XA = [];

    if(X > A.length){
        return -1;
    }

    for (var i = 0; i < A.length; i++) {
        if (A[i] <= X && typeof XA[A[i]] == "undefined") {
            XA[A[i]] = i;
        }
    }

    let empty = 0;
    for(let i = 0; i < XA.length; i++){
        if(typeof XA[i] == 'undefined'  ){
            empty++;
        }
    }

    if(empty > 1 || XA.length < X+1){
        return -1;
    }

    XA.sort((a,b) => b-a);
    return XA[0];
}

let result = solution(X, A);
console.log(result);