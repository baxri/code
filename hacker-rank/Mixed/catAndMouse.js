

function catAndMouse(x, y, z) {

    let A = Math.abs(x - z);
    let B = Math.abs(y - z);

    if (A == B) {
        return 'Mouse C';
    }

    if (A < B) {
        return 'Cat A';
    }

    if (B < A) {
        return 'Cat B';
    }
}


console.log(catAndMouse(1, 2, 3));
console.log(catAndMouse(1, 3, 2));

