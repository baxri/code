

function diagonalDifference(arr) {

    let dig1 = 0;
    let dig2 = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {

            if( i == j ){
                dig1 += arr[i][j];
            }
          
            if( i == arr.length - 1 - j ){
                dig2 += arr[i][j];
            }

        }
    }
    
    return Math.abs(dig1 - dig2);
}


let arr = [
    [1, 2, 3,],
    [4, 5, 6,],
    [9, 8, 9,],
];

console.log(diagonalDifference(arr));