

function cutTheSticks(arr) {

    arr.sort((a, b) => a - b);

    let lengths = [];

    while (arr.length > 0) {

        let min = arr[0];

        lengths.push(arr.length);

        for (let j = 0; j < arr.length; j++) {
            if (arr[j] == min) {
                arr.shift();
                j--;
            } else {
                arr[j] = arr[j] - min;
            }
        }
    }

    return lengths;
}

console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));