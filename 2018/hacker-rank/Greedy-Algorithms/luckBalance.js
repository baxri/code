


function luckBalance(k, contests) {

    let total = 0;
    let importants_contexts = [];

    for (let i = 0; i < contests.length; i++) {
        total += contests[i][0];

        if (contests[i][1]) {
            importants_contexts.push(contests[i][0]);
        }
    }

    importants_contexts.sort((a, b) => a - b);

    let require = importants_contexts.length - k;
    let minQueue = importants_contexts.slice(0, require);

    return total - (minQueue.reduce((a, b) => a + b)) * 2;
}

let contests = [
    [3, 1,],
    [13, 1,],
    [21, 1,],
    [31, 1,],
    [17, 1,],
    [20, 1,],
    [8, 1,],
    [12, 0,],
    [14, 0,],
    [21, 1,],
];

// let contests = [
//     [5,  1],
//     [2,  1],
//     [1,  1],
//     [8,  1],
//     [10, 0],
//     [5,  0],
// ];


console.log(luckBalance(3, contests));