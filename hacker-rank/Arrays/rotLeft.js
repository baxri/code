

function rotLeft(a, d) {

    let rotated = new Array(a.length);

    if (d > a.length) {
        d = d % a.length;
    }

    a.map((val, key) => {

        let position = key - d;

        if (position < 0) {
            position = a.length + position;
        }

        rotated[position] = val;
    });

    return rotated;
}


console.log(rotLeft([1, 2, 3, 4, 5], 2));