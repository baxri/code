


function minimumAbsoluteDifference(arr) {

    arr = arr.sort((a, b) => a - b);

    console.log(arr);

    let i = 0;
    let minDiference = null;

    while (i < arr.length - 1) {

        let current = arr[i];
        let next = arr[i+1];

        let diference = Math.abs(next - current);

        console.log(diference);

        if (diference < minDiference || minDiference === null) {
            minDiference = diference;
        }

        console.log(current);

        i++;
    }

    return minDiference;
}


console.log(minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]));
console.log(minimumAbsoluteDifference([1, -3, 71, 68, 17]));