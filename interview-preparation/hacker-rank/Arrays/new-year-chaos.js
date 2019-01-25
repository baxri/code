

function minimumBribes(q) {

    let swaps = 0;

    for (let i = 0; i < q.length; i++) {
        if ((q[i] - (i + 1)) > 2) {
            console.log('Too chaotic')
            return;
        }
    }

    // We are using bubble sort
    for (let i = 0; i < q.length; i++) {
        let swaped = false;

        for (let j = 0; j < q.length; j++) {
            if (q[j] > q[j + 1]) {
                let tmp = q[j];
                q[j] = q[j + 1];
                q[j + 1] = tmp;
                swaps++;
                swaped = true;
            }
        }

        if (!swaped) {
            break;
        }
    }
    console.log(swaps)
}

// const arr = [2, 1, 5, 3, 4];
const arr = [1, 2, 5, 3, 4, 7, 8, 6];

minimumBribes(arr);