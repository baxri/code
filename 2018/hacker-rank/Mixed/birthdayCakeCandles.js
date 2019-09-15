

function birthdayCakeCandles(ar) {

    ar.sort((a, b) => b - a);

    console.log(ar);

    let count = 0;
    let tallest = null;

    for (let i = 0; i < ar.length; i++) {
        if (tallest === null || ar[i] == tallest) {
            count++;
            tallest = ar[i];
        }
    }

    return count;
}

console.log(birthdayCakeCandles([3, 2, 1, 3]));