


function miniMaxSum(arr) {

    arr = arr.sort((a,b) => a-b);

    let left = arr.slice(0, 4);
    let right = arr.slice(arr.length-4,5);

    console.log(left.reduce((a,b) => a + b) + " " + right.reduce((a,b) => a + b));
}

console.log(miniMaxSum([1, 2, 3, 4, 5]));