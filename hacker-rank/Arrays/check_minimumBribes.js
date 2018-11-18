


function minimumBribes(q) {

    let swapCount = 0;

    for (let i = 0; i < q.length; i++) {

    }

    console.log(q);

    return swapCount;
}

function swap(q, i, j) {
    let temp = q[i];
    q[i] = q[j];
    q[j] = temp;
}

console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));