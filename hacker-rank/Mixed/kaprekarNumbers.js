
function kaprekarNumbers(p, q) {

    let numbers = []

    for (; p <= q; p++) {

        if (isKaprekar(p)) {
            numbers.push(p)
        }
    }

    console.log(numbers.join(' '));
}

function isKaprekar(number) {

    let squaredNumber = [...(number * number).toString()]

    if (number == 1) {
        return true;
    }

    for (let i = 0; i < squaredNumber.length; i++) {
        let left = parseInt(squaredNumber.slice(0, i).join(''));
        let right = parseInt(squaredNumber.slice(i).join(''));

        if (!left || !right) {
            continue;
        }

        let sum = 0;

        if (left) sum += left;
        if (right) sum += right;

        if (sum == number) {
            return true;
        }
    }

    return false;

}

console.log(kaprekarNumbers(1, 100));