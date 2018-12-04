

function squares(a, b) {

    let count = 0;

    for (let i = a + 1; i <= b; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            count++;
        }
    }

    return count;
}

console.log(squares(3, 9));