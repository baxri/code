// Solution Address
// 


let N = 12;
let M = 21;

let result = solution(N, M);
console.log(result);

function solution(N, M) {

    let arrayOfChocolates = (new Array(N)).fill(1, 0, N);
    let eatenChocolates = 0;

    var i = 0;
    while (arrayOfChocolates[i] == 1) {
        arrayOfChocolates = eatChocolate(arrayOfChocolates, i);
        i = findNextChocolate(i, M, N);
        eatenChocolates++;
    }

    return eatenChocolates;
}

function findNextChocolate(i, M, N) {

    let nextChocolate = i + M;

    while (nextChocolate > N) {
        nextChocolate = nextChocolate - N;
    }

    return nextChocolate;
}

function eatChocolate(arrayOfChocolates, i) {
    arrayOfChocolates[i] = 0;
    return arrayOfChocolates;
}






