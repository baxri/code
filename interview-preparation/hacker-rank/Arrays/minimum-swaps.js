



function minimumSwaps(arr) {

    // Sort array to keep track for corect positions
    let sorted = [...arr].sort((a, b) => a - b);

    let swaps = 0;

    // Save correct positions in hashmap to access them easily
    let correctPositions = {};

    sorted.map((elem, index) => {
        correctPositions[elem] = index;
    })

    for (let i = 0; i < arr.length; i++) {

        let elem = arr[i];

        let currentPosition = i;
        let correctPosition = correctPositions[elem];

        if (currentPosition != correctPosition) {

            // make swap
            let temp = arr[correctPosition];
            arr[correctPosition] = elem;
            arr[currentPosition] = temp;
            swaps++;
            i--;
        }
    }

    return swaps;
}

let arr = [2, 3, 4, 1, 5];

console.log(minimumSwaps(arr))