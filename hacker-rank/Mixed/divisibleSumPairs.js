


function divisibleSumPairs(n, k, ar) {

    let count = 0;

    ar.map((current, i) => {

        for (let j = i + 1; j < ar.length; j++) {
            if ((current + ar[j]) % k == 0) {
                count++;
            }
        }

    });

    return count;
}


console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));