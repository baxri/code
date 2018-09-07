
let matrix = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
];

function rotateMatrinx(matrix) {

    let rotate = []

    console.log(matrix);
    console.log(rotate);

   

    console.log(matrix);


    for (let i = 0; i < matrix.length; i++) {

        console.log(matrix[i]);

        for (let j = 0; j < matrix.length; j++) {
            let position = newPosition(matrix.length, i, j);
            rotate[position.row][position.index] = matrix[i][j];
        }
    }

    console.log(rotate);

}

function newPosition(length, row, index) {

    let indexNew = length - row - 1;
    let rowNew = index;

    return {
        row: rowNew,
        index: indexNew,
    }
}

console.log(rotateMatrinx(matrix));