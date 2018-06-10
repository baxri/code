
// let N = [1, 2, 1, 1];
// let N = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let N = [];

for(let i = 1; i <= 30; i++){
    N.push(i);
}

// console.log(N);

function solution(A) {

    let posibilitiesOne = {};
    let posibilitiesTwo = {};
    let posibilities = {};
    let posibilitiesArray = [];

    if (A.length < 3) {
        return 0;
    }

    for (let i = 0; i < A.length; i++) {

        let first = A[i];
        let posibilityForOne = first;

        if (typeof posibilitiesOne[posibilityForOne] != "undefined") {
            continue;
        }

        posibilitiesOne[posibilityForOne] = posibilityForOne;

        // console.log('FIRST: ' + N[i]);

        for (let j = i + 1; j < A.length; j++) {
            let second = A[j];
            // console.log('__SECOND: ' + N[j]);
            let posibilityForTwo = first + "" + second;

            if (typeof posibilitiesTwo[posibilityForTwo] != "undefined") {
                continue;
            }

            posibilitiesTwo[posibilityForTwo] = posibilityForTwo;

            for (let y = j + 1; y < A.length; y++) {
                let third = A[y];

                // let posibility = first + " " + second + " " + third;
                let posibility = first + "" + second + "" + third;

                if (typeof posibilities[posibility] == "undefined") {
                    posibilitiesArray.push(posibility);
                }

                posibilities[posibility] = posibility;

                // console.log('____THIRD: ' + N[y]);
            }
        }
    }

    // console.log(posibilitiesArray.length);

    return posibilitiesArray.length;
}

let result = solution(N);


console.log(result);

