

function beautifulDays(i, j, k) {

    let beautifulDays = 0;

    for (i; i <= j; i++) {

        let number = i;
        let reverse = parseInt(number.toString().split('').reverse().join(''))

        if (Math.abs(number - reverse) % k == 0) {
            beautifulDays++;
        }
    }

    return beautifulDays;
}

console.log(beautifulDays(20, 23, 6));