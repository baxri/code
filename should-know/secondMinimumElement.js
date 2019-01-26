

function secondMinimumElement(arr) {

    arr.sort((a, b) => a - b);

    let firstElement = arr[0];
    let i = 0;

    while (true) {
        if (firstElement != arr[i]) {
            return arr[i];
        }
        i++;
    }
}

console.log(secondMinimumElement([4, 6, 1, 4, 2, 5, 1]));
