
let matrix = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];

function rotateMatrinx(matrix) {

    for (let level = 0; level < 2; level++) {

        let last = matrix.length - 1 - level;

        for (let first = level; first < last; first++) {
            matrix = swap(matrix, level, first, first, last);
            matrix = swap(matrix, level, first, last, last - first);
            matrix = swap(matrix, level, first, last - first, level);
        }

    }

    console.log(matrix);

}

function swap(matrix, a, b, c, d) {

    let temp = matrix[a][b];
    matrix[a][b] = matrix[c][d];
    matrix[c][d] = temp;
    return matrix;
}

console.log(rotateMatrinx(matrix));