
let matrix = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
];

function rotateMatrinx(matrix) {

    for (let level = 0; level < matrix.length / 2; level++) {
        let first = level;
        let last = matrix.length - 1 - level;

        for (let i = first; i < last; i++) {
            let offset = i - first;

            console.log(first);
            console.log(i);

            console.log(last - offset);
            console.log(first);



            let top = matrix[first][i];

            matrix[first][i] = matrix[last - offset][first];



            console.log(top);
        }

    }


}



console.log(rotateMatrinx(matrix));