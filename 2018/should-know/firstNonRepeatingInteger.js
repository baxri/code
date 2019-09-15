

function firstNonRepeatingInteger(arr) {

    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {

        let prev = arr[i - 1];
        let current = arr[i];
        let next = arr[i + 1];

        if (current != next && current != prev) {
            return current;
        }
    }
}


console.log(firstNonRepeatingInteger([4, 6, 1, 4, 2, 5, 1, 2]))