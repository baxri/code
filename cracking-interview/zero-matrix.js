

let matrix = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 0, 5],
    [1, 2, 3, 4, 5],
];

function zeroMatrix(matrix) {

    let rowsZero = [];
    let columnsZero = [];

    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
            if (matrix[row][column] == 0) {
                rowsZero.push(row);
                columnsZero.push(column);
            }
        }
    }



    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {

            console.log(rowsZero);

            if (rowsZero.contains(row)) {

            }
        }
    }


}

console.log(zeroMatrix(matrix));