


function rotLeft(a, d) {

    let rotated = [...a];

    if (d > a.length) {
        d = d % a.length;
    }

    a.map((elem, index) => {

        let newPosition = index - d;

        if (newPosition < 0) {
            newPosition = a.length + newPosition;
        }

        rotated[newPosition] = elem;
    });

    return rotated;
}

function rotRight(a, d) {

    let rotated = [...a];

    if (d > a.length) {
        d = d % a.length;
    }

    a.map((elem, index) => {

        let newPosition = index + d;

        if (newPosition > a.length - 1) {
            newPosition = newPosition - (a.length - 1) - 1;
        }

        rotated[newPosition] = elem;
    });

    return rotated;
}

let arr = [1, 2, 3, 4, 5];

arr = rotRight(arr, 1);
arr = rotLeft(arr, 1);

console.log(arr)
